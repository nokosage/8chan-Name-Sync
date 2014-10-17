﻿// ==UserScript==
// @name         8chan Name Sync
// @version      0.2.1
// @namespace    nokosage
// @description  Enables names on 8chan. Does not require 8chan X.
// @author       nokosage
// @include      *://*8chan.co/b/*
// @run-at       document-start
// @grant        none
// @updateURL    https://namesync.org/8chan/builds/NameSync.meta.js
// @downloadURL  https://namesync.org/8chan/builds/NameSync.user.js
// @icon         data:image/png;base64,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
// ==/UserScript==