/// <reference path="jquery.js" />
function addEvent(eventName, element, fn) {
    if (element.attachEvent) element.attachEvent("on" + eventName, fn);
    else element.addEventListener(eventName, fn, false);
}
//console 补订
if (!window.console) { window.console = { log: function () { } }; }
var _dqtx = {
    errcs: 0, tjsj: null, fhsj: new Date(), sjjg: 20, //检测时间间隔，单位秒
    jsq: null,
    jc: function () {
        //由Aj提交调用
        if (this.sjc() > this.sjjg * 3) {
            this.tjsj = new Date();
            _dqtx.fhsj = new Date();
            if (_dqtx.jsq) window.clearTimeout(_dqtx.jsq);
            this.errcs = 0;
            this.ys();
            //console.log("重起_dqtx.jc()")
        }
    },
    sjc: function () { return ((new Date()) - this.tjsj) / 1000; },
    ys: function () { _dqtx.jsq = window.setInterval("_dqtx.tx();", _dqtx.sjjg * 1000); },
    tx: function () {
        _ev.cf("_dqtx.tx");
        if (this.sjc() < _dqtx.sjjg * 0.5) return;
        if (this.errcs > 3) {
            if (_dqtx.jsq) window.clearTimeout(_dqtx.jsq);
            //console.log("检测出错超过3次,停止检测");
            return;
        }
        if ((new Date() - this.fhsj) / 1000 > this.sjjg * 3) {
            if (_dqtx.jsq) window.clearTimeout(_dqtx.jsq);
            //console.log("返回时间超时,停止检测");
            return;
        }
        this.tjsj = new Date();
        var ozxrs = $("#zxrsts"); ozxrs.addClass("gxts");
        _AJ("dqtx.aspx?cz=tx",
            function (r) {
                _dqtx.errcs = 0;
                _dqtx.fhsj = new Date();
                if (!r || !r.zt) { _dqtx.errcs += 1; return; }
                ozxrs.removeClass("gxts");
                if (!r.zt) return;
                _dqtx.sjjg = r.zx > 1 ? 20 : 40;
                _ym.bgsz("#zxrsts", r.zx);
                _yh.bgglzt(r.gly);
                if (r.sy) { _kj.gxsyl(r.sy); }
                _kj.cjzscxx(r.js);
                _kj.cjzxzlx(r.jx);
                //Q.llbg(r.ll);
                //if (r.sy != "") { _kj.gxsyl(r.sy); }
                //console.log("gx=" + r.gx);
                if (r.gx != "") {
                    gxxx(r.gx);
                    if (_kj.pdgxtx) { _ck.set("ck/xxtx.html", { w: 300, h: 220 }).open(r.gx); }
                    //_ck.set("ck/xxtx.html", { w: 300, h: 220 }).open(r.gx);
                }
                _kj.llcxcl(r.ll);
                //if (Q.mlbh != -1) { var o1 = _m.f(); if (!o1) return; if (o1.xygx()) { _m.dqwj(Q.mlbh); } };
            }, function (r) {
                //console.log(r);
                _dqtx.fhsj = new Date();
                _dqtx.errcs += 1;
            });
    }
};

var _ck = {
    _qjxkyd: true, //是否移动
    _hcckgs: 5,//缓存窗口个数
    _z: 2000, lb: [], _csydpd: false,
    set: function (rurl, rcs) {
        var ckid = this._hqid(rurl);
        if (!ckid) { alert("参数url无效"); return {}; }
        var ck = _ck.find(ckid);
       
        if (!ck) {
            if (document.getElementById(ckid)) { ckid = ckid + "_" + (new Date).getTime(); }
            ck = {
                id: ckid, w: 334, h: 196, wz: null, code: null, bt: null, dygb: null, lx: null, url: rurl, z: null, cssclass: null, nr: null,
                _cjpd: false, _z: 0,
                open: function (rcs) { _ck._open(this, rcs); return this; }, gb: function () { _ck._close(this.id); },
                onr: function () { if (!this._cjpd) return null; return document.getElementById(this.id).childNodes[3] }
            };
            ck = this._kzcs(ck, rcs);
            this.lb.push(ck); 
        }
        if (ck.lx != "wb" && ck.url) { ck.url = _kj.zydz + rurl; }
        return ck;
    },
    ts: function (rnr, rcs) {
        var tsid = "ys_ck_ts";
        var r = "<div class='tsnr'>" + rnr + "</div><div class='tsbu'><button id='" + tsid + "_bu' data-close=1>关闭</button></div>";
        var ck = _ck.set(tsid);
        if (ck && ck._cjpd) { this._qlck(ck); }
        var cs = this._kzcs({ bt: "提示:", lx: "nr", nr: r, ists: true }, rcs);
        this._kzcs(ck, cs);
        ck.open(); document.getElementById(tsid + "_bu").focus();
    },
    _kzcs: function (ry, rcs) {
        if (!rcs) return ry;
        var l = "w,h,wz,code,bt,dygb,lx,url,z,cssclass,nr,ists,v".split(",");
        for (var i = 0; i < l.length; i++) { if (typeof (rcs[l[i]]) != "undefined") ry[l[i]] = rcs[l[i]]; }
        return ry;
    },
    _open: function (ck, rcs) {
        if (!ck._cjpd) { this._cjck(ck); }
        if (ck.bt) _ck._szbt(ck, ck.bt);
        _ck.gxsj(ck, rcs);
        _ck._jz(ck);
        var ro = document.getElementById(ck.id);
        ro.style.display = "block";
        ck.iskq = true;
        _ck.zd_(ck, ro);
    },
    _cjck: function (ck) {
        ck._cjpd = true;
        if (!ck.lx) {
            if (ck.url.indexOf(":\/\/") > 0) {
                ck.lx = "nb";
            } else if (ck.url.substr(0, 1) == "\/") {
                ck.lx = "nb";
    
            } else if (typeof ck.nr == "string") {
                ck.lx = "nr";
            } else if (ck.code) {
                ck.lx = "code";
            } else {
                ck.nr = "未指定ck.lx,范围[nr,aj,wb,nb,code]";
                ck.lx = "nr";
            }
        }
        var e1 = document.createElement('div');
        e1.id = ck.id;
        if (ck.ists) { e1.className = "ysck_ck ysck_ts"; } else if (ck.cssclass) { e1.className = "ysck_ck " + ck.cssclass; } else { e1.className = "ysck_ck"; }
        e1.style.width = ck.w + "px";
        e1.style.height = ck.h + "px";
        e1.style.left = 0 + "px";
        e1.style.top = -10 + "px";
        document.body.appendChild(e1);
        e1.innerHTML = "<div class='ysck_bt'><div></div><button type='button'>×</button></div><div class='ysck_dx'></div><div class='ysck_zz'></div><div class='ysck_if'></div>"
        e1.childNodes[0].childNodes[1].onclick = function () { _ck._close(ck.id); };
        if (ck.lx == "wb" || ck.lx == "nb") {
            if (ck.lx == "nb") {
                e1.lastChild.innerHTML ="<div style='text-align: center;margin-top:20px;'>正在打开窗口<div class='load_more_box'><span></span><span></span><span></span><span></span><span></span></div></div>"
            }
            var ir1; var id = "F_" + ck.id;
            try {
                ir1 = document.createElement("<iframe name='" + id + "'></iframe>");
            } catch (e) {
                ir1 = document.createElement('iframe');
                ir1.name = id;
            }
            ir1.id = id;
            ir1.style.height = "100%";
            e1.lastChild.appendChild(ir1);
        } else {
            //无窗体
            ck.onr().style.padding = "10px";
            ck.onr().style.overflow = "auto";
            ck.onr().onclick = function () {
                
                var t = event.target || event.srcElement;
                if (t.getAttribute("data-close")) { _ck._close(ck.id); return; }
                var cs = t.getAttribute("data-cs") || ""; var dd = t.getAttribute("data-gx");
                if (dd) { _ck.gxsj(ck, cs); return; };
                dd = t.getAttribute("data-ml") || "";
                if (dd) { if (!ck[dd]) { alert("未定义命令:" + dd); return; }; ck[dd](cs); return; }
            };

        }

        if (ck.lx == "nb") {
            var ff = window.frames["F_" + ck.id];
            var fo = document.getElementById("F_" + ck.id);
            addEvent("load", fo, function () {
                $(ck.onr().firstChild).hide();
                ck.load = true;
                if (!ck.bt) _ck._szbt(ck, ff.document.title);
                ff._zck = ck; //把窗体信息赋值给子窗口
                if (ff.csdy) { ff.csdy(); }
                ff.document.onmousedown = function () { _ck.zd_(ck); };
               


            });
        }
        this._ydcl();
        _ck._jz(ck);
    },
    gxsj: function (ck, rcs) {
        if (ck.lx == "code") {
            if (ck.code) { ck.code(rcs); } else { ck.onr().innerHTML = "not find ck.code" }
            return;
        }
        if (ck.lx == "nr") {
            ck.onr().innerHTML = rcs || ck.nr;
            if (ck.code) { ck.code(); }
            return;
        }
        if (ck.lx == "wb") {
            _ck._szbt(ck,ck.bt || rcs || ck.url);
            window.frames["F_" + ck.id].location.href = rcs || ck.url;
            return;
        }
        var rdz = ck.url;
        if (ck.v) { rdz = rdz + (rdz.indexOf("\?") > 0 ? "&" : "?") + "v=" + ck.v };
        if (ck.lx == "aj") {
            if (rcs) { if (rcs.indexOf("\?") != 0) rcs = "?" + rcs; rdz = rdz.split("\?")[0] + rcs; }
            ck.url = rdz;
            if (!ck.bt) _ck._szbt(ck, rdz);
            _AJ(rdz, null, function (r) {
                if (ck.code) { ck.code(r); return; }
                if (ck.nr) r += ck.nr;
                ck.onr().innerHTML = r;
            });
            return;
        }
        //nb
        if (_kj.bbh) { { rdz = rdz + (rdz.indexOf("\?") > 0 ? "&" : "?") + "bbh=" + _kj.bbh; } }
        var ff = window.frames["F_" + ck.id];
        ck.z = rcs;

        var ro = document.getElementById(ck.id);
        ro.style.display = "block";

        if (ck.load && ff.csdy) { ff.csdy(); } else { ff.location.href = rdz; }
    },
    _szbt: function (ck, bt) {
        if (!ck._cjpd) { ck.bt = bt; return; }
        document.getElementById(ck.id).childNodes[0].childNodes[0].innerHTML = bt;
    },
    _close: function (rid) {
        var ck = _ck.find(rid);
        if (!ck) return;
        if (!ck.iskq) return;
        if (ck.dygb) { if (ck.dygb()) return; }
        document.getElementById(ck.id).style.display = "none";
        ck.iskq = false;
        var nzs = 0; var njl = this._z; var nxh = -1;
        for (var i = 0 ; i < this.lb.length; i++) {
            var o = this.lb[i];
            if (o && o._cjpd && !o.iskq) { nzs += 1; if (o._z < njl) { njl = o._z; nxh = i; } }
        }
        if (nzs > this._hcckgs) { this._qlck(this.lb[nxh]); }
    },
    _qlck: function (ck) { o = document.getElementById(ck.id); if (o) { o.parentNode.removeChild(o); } ck.iskq = false; ck._cjpd = false; },
    find: function (rid) {
        for (var i = 0; i < _ck.lb.length; i++) { if (_ck.lb[i] && _ck.lb[i].id == rid) { return _ck.lb[i]; break; } }
        return null;
    },
    zd_: function (rck, ro) {
        var o = ro; if (!o) o = document.getElementById(rck.id); if (!o) return;
        if (o.style.zIndex < _ck._z) { _ck._z = _ck._z + 2; o.style.zIndex = _ck._z; rck._z = _ck._z; };
    },
    pw_: function () {
        //return [document.documentElement.clientWidth, document.documentElement.clientHeight]
        return [$(window).width(), $(window).height()];
    },
    _jz: function (ck, rqz) {
        var xpm = _ck.pw_();
        var ro = document.getElementById(ck.id);
        //var xck = [parseInt(ro.style.width), parseInt(ro.style.height)];
        var xck = [$(ro).width(), $(ro).height()];
        var xwz = [parseInt(ro.style.left), parseInt(ro.style.top)];
        if (rqz || (xwz[0] < 0 - xck[0] / 2 || xwz[1] < 0 || xwz[0] > xpm[0] || xwz[1] > xpm[1])) {
            var x1 = -1, y1 = -1;
            if (ck.wz) {
                x1 = ck.wz[0]; y1 = ck.wz[1];
                if (x1 < 0) x1 = xpm[0] + x1;
                if (y1 < 0) y1 = xpm[1] + y1;
            }
            if (x1 < 0) x1 = xpm[0] / 2 - xck[0] / 2;
            if (y1 < 0) { if (xpm[1] > xck[1]) { y1 = xpm[1] / 4;} }
            if (y1 < 0) y1 = 0;
            ro.style.left = x1 + "px"; ro.style.top = y1 + "px";
        }

    },
    _ydcl: function () {
        if (_ck._csydpd) return;
        _ck._csydpd = true;
        var e1 = document.createElement("div");
        e1.className = "ysck_zz";
        e1.style.top = 0;
        document.body.appendChild(e1);
        document.onmousedown = function (e) {
            var isyd = false; var zt = false;
            var e = e || window.event;
            var target = e.srcElement ? e.srcElement : e.target;
            if (target.tagName == "BUTTON") { return; }
            var oo = target; var rid = "";
            while (oo) {
                if (oo.className) {
                    if (oo.className.indexOf("ysck_bt") >= 0) {
                        zt = true;
                        isyd = true;
                    } else if (oo.className.indexOf("ysck_dx") >= 0) {
                        zt = true;
                        isyd = false
                    } else if (oo.className.indexOf("ysck_ck") >= 0) {
                        rid = oo.id;
                        oo = null;
                    }
                }
                if (oo) oo = oo.parentNode;
            };

            if (rid == "") return;
            _ck.zd_(_ck.find(rid));
            if (!_ck._qjxkyd || !zt) return;
            //--

            zt = true;
            var omb = document.getElementById(rid);
            var jw = [parseInt(omb.style.left), parseInt(omb.style.top)];
            var js = _ck._wzsb(e);
            var jd = [parseInt(omb.style.width), parseInt(omb.style.height)];
            if (!isyd) {
                omb.childNodes[1].style.height = "600px";
                omb.childNodes[1].style.width = "600px";
            } else {
                omb.childNodes[2].style.display = "block";
            }
            e1.style.zIndex = _ck._z - 1;
            e1.style.display = "block";

            document.onmouseup = function () {
                if (!zt) return;
                zt = false;
                if (!isyd) {
                    omb.childNodes[1].style.height = "30px";
                    omb.childNodes[1].style.width = "30px";
                } else {
                    omb.childNodes[2].style.display = "none";
                };
                e1.style.display = "none";
                omb = null;
            };
            document.onmousemove = function (e) {
                if (!zt) return;
                e = e || window.event;
                var t = _ck._wzsb(e);
                var cx = t[0] - js[0]; var cy = t[1] - js[1];
                var nx, ny;
                if (isyd) {
                    nx = jw[0] + cx; ny = jw[1] + cy;
                    if (ny < 0) ny = 0; if (nx < 0 - jw[0] / 2) nx = 0 - jw[0] / 2;
                    omb.style.left = nx + "px"; omb.style.top = ny + "px";
                } else {
                    nx = jd[0] + cx; ny = jd[1] + cy;
                    if (nx < 80) nx = 80; if (ny < 50) ny = 50;
                    omb.style.width = nx + "px"; omb.style.height = ny + "px";
                }
            };
            return false;
        }
    },
    _wzsb: function (evt) {
        var pos = [0, 0];
        if (typeof (evt.pageX) == 'number') { pos[0] = evt.pageX; pos[1] = evt.pageY; }
        else { pos[0] = evt.clientX; pos[1] = evt.clientY; };
        return pos;
    },
    _hqid: function (rdz) {
        rdz = rdz.split("\?")[0];
        rdz = rdz.split("\#")[0];
        rdz = rdz.replace(/:\/\//g, "_");
        rdz = rdz.replace(/\//g, "_");
        rdz = rdz.replace(/\./g, "_");
        rdz = rdz.replace(/\:/g, "_");
        rdz = rdz.replace(/\b_+/, "");
        if (rdz.length > 30) rdz = rdz.substr(rdz.length - 30);
        return rdz;
    }
};

//var _txxl = {
//    lb: [], gz: false, zxxh: -1,
//    fkz: function () {
//        var nxh = -1;
//        $.each(_txxl.lb, function (i, o) { if (!o) { nxh = i; return false; } })
//        if (nxh >= 0) return nxh;
//        this.lb.push({ rdz: "", rdata: null, rfun: null, rfun_err: null });
//        return this.lb.length - 1;
//    },
//    f: function () {
//        var nxh = -1;
//        $.each(_txxl.lb, function (i, o) { if (o) { nxh = i; return false; } })
//        this.zxxh = nxh;
//        return nxh;
//    }

//}




