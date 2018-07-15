/*
* Copyright (c) 2015 Craig Bosma.  All rights reserved.
* Copyrights licensed under MIT License.
* See the accompanying LICENSE file for terms.
*/
if (window.location.hostname.substr(0, 5) !== 'smile') {
    tmp = window.location.hostname.replace(/^(www\.)?amazon/,"smile.amazon");
    window.location.hostname = tmp;
  }