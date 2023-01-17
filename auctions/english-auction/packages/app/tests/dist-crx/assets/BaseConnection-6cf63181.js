import {
  e as qn,
  W as wn,
  R as Ri,
  y as xe,
  h as Ci,
  Q as Di,
  i as vr,
  j as Pr,
  k as pr,
} from './index-ba02b8c1.js';
class Pi {
  constructor(t) {
    this.path = t;
  }
  get params() {
    return Array.from(this.path.matchAll(/:([^/]+)/g)).reduce(
      (n, r) => ({ ...n, [r[1]]: null }),
      {}
    );
  }
}
function z(e) {
  const t = new Pi(e);
  return function (r, i) {
    return `/${
      t.path
        .match(/[^/]+/g)
        ?.map((u) => r?.[u.replace(':', '')] || u)
        .join('/') ?? ''
    }${Kr(i)}`;
  };
}
function Kr(e) {
  const t = new URLSearchParams(e).toString();
  return t.length ? `?${t}` : '';
}
function qo(e, t) {
  const { href: n } = new URL(e, 'https://fuel.network/');
  return `${n}${Kr(t)}`;
}
var Gn = ((e) => ((e.signup = '/index.html'), (e.popup = '/popup.html'), e))(Gn || {});
const Ki = {
    index: z('/'),
    wallet: z('/wallet'),
    faucet: z('/wallet/faucet'),
    receive: z('/wallet/receive'),
    signUp: z('/sign-up'),
    signUpWelcome: z('/sign-up/welcome'),
    signUpCreateWallet: z('/sign-up/create-wallet'),
    signUpRecoverWallet: z('/sign-up/recover-wallet'),
    signUpWalletCreated: z('/sign-up/wallet-created'),
    networks: z('/networks'),
    networkUpdate: z('/networks/update/:id'),
    networkAdd: z('/networks/add'),
    request: z('/request'),
    requestConnection: z('/request/connection'),
    requestTransaction: z('/request/transaction'),
    requestMessage: z('/request/message'),
    txs: z('/transactions'),
    tx: z('/transactions/view/:txId'),
    settings: z('/settings'),
    settingsRevealPassphrase: z('/settings/reveal-passphrase'),
    settingsChangePassword: z('/settings/change-password'),
    send: z('/send'),
    sendConfirm: z('/send/confirm'),
    accounts: z('/accounts'),
    accountAdd: z('/accounts/add'),
  },
  {
    VITE_MNEMONIC_WORDS: Go,
    VITE_FUEL_PROVIDER_URL: zo,
    VITE_FAUCET_RECAPTCHA_KEY: Xo,
    VITE_FUEL_FAUCET_URL: Jo,
    VITE_ADDR_OWNER: Qo,
    VITE_CRX: Mi,
    NODE_ENV: Zo,
  } = {
    VITE_FUEL_PROVIDER_URL: 'http://localhost:4000/graphql',
    VITE_FUEL_FAUCET_URL: 'http://localhost:4040/dispense',
    VITE_MNEMONIC_WORDS: '12',
    VITE_FAUCET_RECAPTCHA_KEY: '',
    VITE_APP_VERSION: '0.0.1',
    VITE_CRX: 'true',
    BASE_URL: '/',
    MODE: 'production',
    DEV: !1,
    PROD: !0,
  },
  eu = 3,
  tu = 16,
  nu = 350,
  ru = 600,
  iu = 30,
  Bi = Mi === 'true',
  au = 'isLogged',
  ou = Bi && globalThis.location.pathname === Gn.popup,
  uu = () => chrome.runtime.getURL(`${Gn.signup}#${Ki.signUpWelcome()}`);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.
Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.
THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var H =
  function () {
    return (
      (H =
        Object.assign ||
        function (t) {
          for (var n, r = 1, i = arguments.length; r < i; r++) {
            n = arguments[r];
            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
          }
          return t;
        }),
      H.apply(this, arguments)
    );
  };
function _n(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t.length, a; r < i; r++)
      (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), (a[r] = t[r]));
  return e.concat(a || Array.prototype.slice.call(t));
}
var J =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
      ? self
      : typeof window < 'u'
      ? window
      : global,
  te = Object.keys,
  ae = Array.isArray;
typeof Promise < 'u' && !J.Promise && (J.Promise = Promise);
function se(e, t) {
  return (
    typeof t != 'object' ||
      te(t).forEach(function (n) {
        e[n] = t[n];
      }),
    e
  );
}
var Et = Object.getPrototypeOf,
  Ni = {}.hasOwnProperty;
function ve(e, t) {
  return Ni.call(e, t);
}
function ot(e, t) {
  typeof t == 'function' && (t = t(Et(e))),
    (typeof Reflect > 'u' ? te : Reflect.ownKeys)(t).forEach(function (n) {
      Ce(e, n, t[n]);
    });
}
var Mr = Object.defineProperty;
function Ce(e, t, n, r) {
  Mr(
    e,
    t,
    se(
      n && ve(n, 'get') && typeof n.get == 'function'
        ? { get: n.get, set: n.set, configurable: !0 }
        : { value: n, configurable: !0, writable: !0 },
      r
    )
  );
}
function ut(e) {
  return {
    from: function (t) {
      return (
        (e.prototype = Object.create(t.prototype)),
        Ce(e.prototype, 'constructor', e),
        { extend: ot.bind(null, e.prototype) }
      );
    },
  };
}
var Fi = Object.getOwnPropertyDescriptor;
function zn(e, t) {
  var n = Fi(e, t),
    r;
  return n || ((r = Et(e)) && zn(r, t));
}
var ji = [].slice;
function nn(e, t, n) {
  return ji.call(e, t, n);
}
function Br(e, t) {
  return t(e);
}
function yt(e) {
  if (!e) throw new Error('Assertion Failed');
}
function Nr(e) {
  J.setImmediate ? setImmediate(e) : setTimeout(e, 0);
}
function Fr(e, t) {
  return e.reduce(function (n, r, i) {
    var a = t(r, i);
    return a && (n[a[0]] = a[1]), n;
  }, {});
}
function Ui(e, t, n) {
  try {
    e.apply(null, n);
  } catch (r) {
    t && t(r);
  }
}
function Re(e, t) {
  if (ve(e, t)) return e[t];
  if (!t) return e;
  if (typeof t != 'string') {
    for (var n = [], r = 0, i = t.length; r < i; ++r) {
      var a = Re(e, t[r]);
      n.push(a);
    }
    return n;
  }
  var o = t.indexOf('.');
  if (o !== -1) {
    var u = e[t.substr(0, o)];
    return u === void 0 ? void 0 : Re(u, t.substr(o + 1));
  }
}
function ge(e, t, n) {
  if (!(!e || t === void 0) && !('isFrozen' in Object && Object.isFrozen(e)))
    if (typeof t != 'string' && 'length' in t) {
      yt(typeof n != 'string' && 'length' in n);
      for (var r = 0, i = t.length; r < i; ++r) ge(e, t[r], n[r]);
    } else {
      var a = t.indexOf('.');
      if (a !== -1) {
        var o = t.substr(0, a),
          u = t.substr(a + 1);
        if (u === '')
          n === void 0 ? (ae(e) && !isNaN(parseInt(o)) ? e.splice(o, 1) : delete e[o]) : (e[o] = n);
        else {
          var s = e[o];
          (!s || !ve(e, o)) && (s = e[o] = {}), ge(s, u, n);
        }
      } else
        n === void 0 ? (ae(e) && !isNaN(parseInt(t)) ? e.splice(t, 1) : delete e[t]) : (e[t] = n);
    }
}
function Li(e, t) {
  typeof t == 'string'
    ? ge(e, t, void 0)
    : 'length' in t &&
      [].map.call(t, function (n) {
        ge(e, n, void 0);
      });
}
function jr(e) {
  var t = {};
  for (var n in e) ve(e, n) && (t[n] = e[n]);
  return t;
}
var Vi = [].concat;
function Ur(e) {
  return Vi.apply([], e);
}
var Lr =
    'Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey'
      .split(',')
      .concat(
        Ur(
          [8, 16, 32, 64].map(function (e) {
            return ['Int', 'Uint', 'Float'].map(function (t) {
              return t + e + 'Array';
            });
          })
        )
      )
      .filter(function (e) {
        return J[e];
      }),
  Wi = Lr.map(function (e) {
    return J[e];
  });
Fr(Lr, function (e) {
  return [e, !0];
});
var Me = null;
function Ot(e) {
  Me = typeof WeakMap < 'u' && new WeakMap();
  var t = bn(e);
  return (Me = null), t;
}
function bn(e) {
  if (!e || typeof e != 'object') return e;
  var t = Me && Me.get(e);
  if (t) return t;
  if (ae(e)) {
    (t = []), Me && Me.set(e, t);
    for (var n = 0, r = e.length; n < r; ++n) t.push(bn(e[n]));
  } else if (Wi.indexOf(e.constructor) >= 0) t = e;
  else {
    var i = Et(e);
    (t = i === Object.prototype ? {} : Object.create(i)), Me && Me.set(e, t);
    for (var a in e) ve(e, a) && (t[a] = bn(e[a]));
  }
  return t;
}
var Hi = {}.toString;
function En(e) {
  return Hi.call(e).slice(8, -1);
}
var Sn = typeof Symbol < 'u' ? Symbol.iterator : '@@iterator',
  $i =
    typeof Sn == 'symbol'
      ? function (e) {
          var t;
          return e != null && (t = e[Sn]) && t.apply(e);
        }
      : function () {
          return null;
        },
  it = {};
function ke(e) {
  var t, n, r, i;
  if (arguments.length === 1) {
    if (ae(e)) return e.slice();
    if (this === it && typeof e == 'string') return [e];
    if ((i = $i(e))) {
      for (n = []; (r = i.next()), !r.done; ) n.push(r.value);
      return n;
    }
    if (e == null) return [e];
    if (((t = e.length), typeof t == 'number')) {
      for (n = new Array(t); t--; ) n[t] = e[t];
      return n;
    }
    return [e];
  }
  for (t = arguments.length, n = new Array(t); t--; ) n[t] = arguments[t];
  return n;
}
var Xn =
    typeof Symbol < 'u'
      ? function (e) {
          return e[Symbol.toStringTag] === 'AsyncFunction';
        }
      : function () {
          return !1;
        },
  Ee = typeof location < 'u' && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
function Vr(e, t) {
  (Ee = e), (Wr = t);
}
var Wr = function () {
    return !0;
  },
  Yi = !new Error('').stack;
function et() {
  if (Yi)
    try {
      throw (et.arguments, new Error());
    } catch (e) {
      return e;
    }
  return new Error();
}
function An(e, t) {
  var n = e.stack;
  return n
    ? ((t = t || 0),
      n.indexOf(e.name) === 0 &&
        (t += (e.name + e.message).split(`
`).length),
      n
        .split(
          `
`
        )
        .slice(t)
        .filter(Wr)
        .map(function (r) {
          return (
            `
` + r
          );
        })
        .join(''))
    : '';
}
var qi = [
    'Modify',
    'Bulk',
    'OpenFailed',
    'VersionChange',
    'Schema',
    'Upgrade',
    'InvalidTable',
    'MissingAPI',
    'NoSuchDatabase',
    'InvalidArgument',
    'SubTransaction',
    'Unsupported',
    'Internal',
    'DatabaseClosed',
    'PrematureCommit',
    'ForeignAwait',
  ],
  Hr = [
    'Unknown',
    'Constraint',
    'Data',
    'TransactionInactive',
    'ReadOnly',
    'Version',
    'NotFound',
    'InvalidState',
    'InvalidAccess',
    'Abort',
    'Timeout',
    'QuotaExceeded',
    'Syntax',
    'DataClone',
  ],
  Jn = qi.concat(Hr),
  Gi = {
    VersionChanged: 'Database version changed by other database connection',
    DatabaseClosed: 'Database has been closed',
    Abort: 'Transaction aborted',
    TransactionInactive: 'Transaction has already completed or failed',
    MissingAPI: 'IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb',
  };
function st(e, t) {
  (this._e = et()), (this.name = e), (this.message = t);
}
ut(st)
  .from(Error)
  .extend({
    stack: {
      get: function () {
        return this._stack || (this._stack = this.name + ': ' + this.message + An(this._e, 2));
      },
    },
    toString: function () {
      return this.name + ': ' + this.message;
    },
  });
function $r(e, t) {
  return (
    e +
    '. Errors: ' +
    Object.keys(t)
      .map(function (n) {
        return t[n].toString();
      })
      .filter(function (n, r, i) {
        return i.indexOf(n) === r;
      }).join(`
`)
  );
}
function qt(e, t, n, r) {
  (this._e = et()),
    (this.failures = t),
    (this.failedKeys = r),
    (this.successCount = n),
    (this.message = $r(e, t));
}
ut(qt).from(st);
function wt(e, t) {
  (this._e = et()),
    (this.name = 'BulkError'),
    (this.failures = Object.keys(t).map(function (n) {
      return t[n];
    })),
    (this.failuresByPos = t),
    (this.message = $r(e, t));
}
ut(wt).from(st);
var Qn = Jn.reduce(function (e, t) {
    return (e[t] = t + 'Error'), e;
  }, {}),
  zi = st,
  N = Jn.reduce(function (e, t) {
    var n = t + 'Error';
    function r(i, a) {
      (this._e = et()),
        (this.name = n),
        i
          ? typeof i == 'string'
            ? ((this.message =
                '' +
                i +
                (a
                  ? `
 ` + a
                  : '')),
              (this.inner = a || null))
            : typeof i == 'object' && ((this.message = i.name + ' ' + i.message), (this.inner = i))
          : ((this.message = Gi[t] || n), (this.inner = null));
    }
    return ut(r).from(zi), (e[t] = r), e;
  }, {});
N.Syntax = SyntaxError;
N.Type = TypeError;
N.Range = RangeError;
var yr = Hr.reduce(function (e, t) {
  return (e[t + 'Error'] = N[t]), e;
}, {});
function Xi(e, t) {
  if (
    !e ||
    e instanceof st ||
    e instanceof TypeError ||
    e instanceof SyntaxError ||
    !e.name ||
    !yr[e.name]
  )
    return e;
  var n = new yr[e.name](t || e.message, e);
  return (
    'stack' in e &&
      Ce(n, 'stack', {
        get: function () {
          return this.inner.stack;
        },
      }),
    n
  );
}
var rn = Jn.reduce(function (e, t) {
  return ['Syntax', 'Type', 'Range'].indexOf(t) === -1 && (e[t + 'Error'] = N[t]), e;
}, {});
rn.ModifyError = qt;
rn.DexieError = st;
rn.BulkError = wt;
function q() {}
function Rt(e) {
  return e;
}
function Ji(e, t) {
  return e == null || e === Rt
    ? t
    : function (n) {
        return t(e(n));
      };
}
function Qe(e, t) {
  return function () {
    e.apply(this, arguments), t.apply(this, arguments);
  };
}
function Qi(e, t) {
  return e === q
    ? t
    : function () {
        var n = e.apply(this, arguments);
        n !== void 0 && (arguments[0] = n);
        var r = this.onsuccess,
          i = this.onerror;
        (this.onsuccess = null), (this.onerror = null);
        var a = t.apply(this, arguments);
        return (
          r && (this.onsuccess = this.onsuccess ? Qe(r, this.onsuccess) : r),
          i && (this.onerror = this.onerror ? Qe(i, this.onerror) : i),
          a !== void 0 ? a : n
        );
      };
}
function Zi(e, t) {
  return e === q
    ? t
    : function () {
        e.apply(this, arguments);
        var n = this.onsuccess,
          r = this.onerror;
        (this.onsuccess = this.onerror = null),
          t.apply(this, arguments),
          n && (this.onsuccess = this.onsuccess ? Qe(n, this.onsuccess) : n),
          r && (this.onerror = this.onerror ? Qe(r, this.onerror) : r);
      };
}
function ea(e, t) {
  return e === q
    ? t
    : function (n) {
        var r = e.apply(this, arguments);
        se(n, r);
        var i = this.onsuccess,
          a = this.onerror;
        (this.onsuccess = null), (this.onerror = null);
        var o = t.apply(this, arguments);
        return (
          i && (this.onsuccess = this.onsuccess ? Qe(i, this.onsuccess) : i),
          a && (this.onerror = this.onerror ? Qe(a, this.onerror) : a),
          r === void 0 ? (o === void 0 ? void 0 : o) : se(r, o)
        );
      };
}
function ta(e, t) {
  return e === q
    ? t
    : function () {
        return t.apply(this, arguments) === !1 ? !1 : e.apply(this, arguments);
      };
}
function Zn(e, t) {
  return e === q
    ? t
    : function () {
        var n = e.apply(this, arguments);
        if (n && typeof n.then == 'function') {
          for (var r = this, i = arguments.length, a = new Array(i); i--; ) a[i] = arguments[i];
          return n.then(function () {
            return t.apply(r, a);
          });
        }
        return t.apply(this, arguments);
      };
}
var St = {},
  na = 100,
  ra = 20,
  Yr = 100,
  er =
    typeof Promise > 'u'
      ? []
      : (function () {
          var e = Promise.resolve();
          if (typeof crypto > 'u' || !crypto.subtle) return [e, Et(e), e];
          var t = crypto.subtle.digest('SHA-512', new Uint8Array([0]));
          return [t, Et(t), e];
        })(),
  Tn = er[0],
  Gt = er[1],
  In = er[2],
  qr = Gt && Gt.then,
  Lt = Tn && Tn.constructor,
  tr = !!In,
  xn = !1,
  ia = In
    ? function () {
        In.then(Bt);
      }
    : J.setImmediate
    ? setImmediate.bind(null, Bt)
    : J.MutationObserver
    ? function () {
        var e = document.createElement('div');
        new MutationObserver(function () {
          Bt(), (e = null);
        }).observe(e, { attributes: !0 }),
          e.setAttribute('i', '1');
      }
    : function () {
        setTimeout(Bt, 0);
      },
  At = function (e, t) {
    mt.push([e, t]), zt && (ia(), (zt = !1));
  },
  kn = !0,
  zt = !0,
  Xe = [],
  Vt = [],
  On = null,
  Rn = Rt,
  at = {
    id: 'global',
    global: !0,
    ref: 0,
    unhandleds: [],
    onunhandled: wr,
    pgp: !1,
    env: {},
    finalize: function () {
      this.unhandleds.forEach(function (e) {
        try {
          wr(e[0], e[1]);
        } catch {}
      });
    },
  },
  K = at,
  mt = [],
  Je = 0,
  Wt = [];
function R(e) {
  if (typeof this != 'object') throw new TypeError('Promises must be constructed via new');
  (this._listeners = []), (this.onuncatched = q), (this._lib = !1);
  var t = (this._PSD = K);
  if (
    (Ee && ((this._stackHolder = et()), (this._prev = null), (this._numPrev = 0)),
    typeof e != 'function')
  ) {
    if (e !== St) throw new TypeError('Not a function');
    (this._state = arguments[1]),
      (this._value = arguments[2]),
      this._state === !1 && Dn(this, this._value);
    return;
  }
  (this._state = null), (this._value = null), ++t.ref, zr(this, e);
}
var Cn = {
  get: function () {
    var e = K,
      t = Xt;
    function n(r, i) {
      var a = this,
        o = !e.global && (e !== K || t !== Xt),
        u = o && !De(),
        s = new R(function (c, d) {
          nr(a, new Gr(Qt(r, e, o, u), Qt(i, e, o, u), c, d, e));
        });
      return Ee && Qr(s, this), s;
    }
    return (n.prototype = St), n;
  },
  set: function (e) {
    Ce(
      this,
      'then',
      e && e.prototype === St
        ? Cn
        : {
            get: function () {
              return e;
            },
            set: Cn.set,
          }
    );
  },
};
ot(R.prototype, {
  then: Cn,
  _then: function (e, t) {
    nr(this, new Gr(null, null, e, t, K));
  },
  catch: function (e) {
    if (arguments.length === 1) return this.then(null, e);
    var t = arguments[0],
      n = arguments[1];
    return typeof t == 'function'
      ? this.then(null, function (r) {
          return r instanceof t ? n(r) : Ht(r);
        })
      : this.then(null, function (r) {
          return r && r.name === t ? n(r) : Ht(r);
        });
  },
  finally: function (e) {
    return this.then(
      function (t) {
        return e(), t;
      },
      function (t) {
        return e(), Ht(t);
      }
    );
  },
  stack: {
    get: function () {
      if (this._stack) return this._stack;
      try {
        xn = !0;
        var e = Jr(this, [], ra),
          t = e.join(`
From previous: `);
        return this._state !== null && (this._stack = t), t;
      } finally {
        xn = !1;
      }
    },
  },
  timeout: function (e, t) {
    var n = this;
    return e < 1 / 0
      ? new R(function (r, i) {
          var a = setTimeout(function () {
            return i(new N.Timeout(t));
          }, e);
          n.then(r, i).finally(clearTimeout.bind(null, a));
        })
      : this;
  },
});
typeof Symbol < 'u' && Symbol.toStringTag && Ce(R.prototype, Symbol.toStringTag, 'Dexie.Promise');
at.env = Zr();
function Gr(e, t, n, r, i) {
  (this.onFulfilled = typeof e == 'function' ? e : null),
    (this.onRejected = typeof t == 'function' ? t : null),
    (this.resolve = n),
    (this.reject = r),
    (this.psd = i);
}
ot(R, {
  all: function () {
    var e = ke.apply(null, arguments).map(Jt);
    return new R(function (t, n) {
      e.length === 0 && t([]);
      var r = e.length;
      e.forEach(function (i, a) {
        return R.resolve(i).then(function (o) {
          (e[a] = o), --r || t(e);
        }, n);
      });
    });
  },
  resolve: function (e) {
    if (e instanceof R) return e;
    if (e && typeof e.then == 'function')
      return new R(function (n, r) {
        e.then(n, r);
      });
    var t = new R(St, !0, e);
    return Qr(t, On), t;
  },
  reject: Ht,
  race: function () {
    var e = ke.apply(null, arguments).map(Jt);
    return new R(function (t, n) {
      e.map(function (r) {
        return R.resolve(r).then(t, n);
      });
    });
  },
  PSD: {
    get: function () {
      return K;
    },
    set: function (e) {
      return (K = e);
    },
  },
  totalEchoes: {
    get: function () {
      return Xt;
    },
  },
  newPSD: je,
  usePSD: lt,
  scheduler: {
    get: function () {
      return At;
    },
    set: function (e) {
      At = e;
    },
  },
  rejectionMapper: {
    get: function () {
      return Rn;
    },
    set: function (e) {
      Rn = e;
    },
  },
  follow: function (e, t) {
    return new R(function (n, r) {
      return je(
        function (i, a) {
          var o = K;
          (o.unhandleds = []),
            (o.onunhandled = a),
            (o.finalize = Qe(function () {
              var u = this;
              oa(function () {
                u.unhandleds.length === 0 ? i() : a(u.unhandleds[0]);
              });
            }, o.finalize)),
            e();
        },
        t,
        n,
        r
      );
    });
  },
});
Lt &&
  (Lt.allSettled &&
    Ce(R, 'allSettled', function () {
      var e = ke.apply(null, arguments).map(Jt);
      return new R(function (t) {
        e.length === 0 && t([]);
        var n = e.length,
          r = new Array(n);
        e.forEach(function (i, a) {
          return R.resolve(i)
            .then(
              function (o) {
                return (r[a] = { status: 'fulfilled', value: o });
              },
              function (o) {
                return (r[a] = { status: 'rejected', reason: o });
              }
            )
            .then(function () {
              return --n || t(r);
            });
        });
      });
    }),
  Lt.any &&
    typeof AggregateError < 'u' &&
    Ce(R, 'any', function () {
      var e = ke.apply(null, arguments).map(Jt);
      return new R(function (t, n) {
        e.length === 0 && n(new AggregateError([]));
        var r = e.length,
          i = new Array(r);
        e.forEach(function (a, o) {
          return R.resolve(a).then(
            function (u) {
              return t(u);
            },
            function (u) {
              (i[o] = u), --r || n(new AggregateError(i));
            }
          );
        });
      });
    }));
function zr(e, t) {
  try {
    t(function (n) {
      if (e._state === null) {
        if (n === e) throw new TypeError('A promise cannot be resolved with itself.');
        var r = e._lib && Ct();
        n && typeof n.then == 'function'
          ? zr(e, function (i, a) {
              n instanceof R ? n._then(i, a) : n.then(i, a);
            })
          : ((e._state = !0), (e._value = n), Xr(e)),
          r && Dt();
      }
    }, Dn.bind(null, e));
  } catch (n) {
    Dn(e, n);
  }
}
function Dn(e, t) {
  if ((Vt.push(t), e._state === null)) {
    var n = e._lib && Ct();
    (t = Rn(t)),
      (e._state = !1),
      (e._value = t),
      Ee &&
        t !== null &&
        typeof t == 'object' &&
        !t._promise &&
        Ui(function () {
          var r = zn(t, 'stack');
          (t._promise = e),
            Ce(t, 'stack', {
              get: function () {
                return xn ? r && (r.get ? r.get.apply(t) : r.value) : e.stack;
              },
            });
        }),
      ua(e),
      Xr(e),
      n && Dt();
  }
}
function Xr(e) {
  var t = e._listeners;
  e._listeners = [];
  for (var n = 0, r = t.length; n < r; ++n) nr(e, t[n]);
  var i = e._PSD;
  --i.ref || i.finalize(),
    Je === 0 &&
      (++Je,
      At(function () {
        --Je === 0 && rr();
      }, []));
}
function nr(e, t) {
  if (e._state === null) {
    e._listeners.push(t);
    return;
  }
  var n = e._state ? t.onFulfilled : t.onRejected;
  if (n === null) return (e._state ? t.resolve : t.reject)(e._value);
  ++t.psd.ref, ++Je, At(aa, [n, e, t]);
}
function aa(e, t, n) {
  try {
    On = t;
    var r,
      i = t._value;
    t._state ? (r = e(i)) : (Vt.length && (Vt = []), (r = e(i)), Vt.indexOf(i) === -1 && sa(t)),
      n.resolve(r);
  } catch (a) {
    n.reject(a);
  } finally {
    (On = null), --Je === 0 && rr(), --n.psd.ref || n.psd.finalize();
  }
}
function Jr(e, t, n) {
  if (t.length === n) return t;
  var r = '';
  if (e._state === !1) {
    var i = e._value,
      a,
      o;
    i != null
      ? ((a = i.name || 'Error'), (o = i.message || i), (r = An(i, 0)))
      : ((a = i), (o = '')),
      t.push(a + (o ? ': ' + o : '') + r);
  }
  return (
    Ee &&
      ((r = An(e._stackHolder, 2)),
      r && t.indexOf(r) === -1 && t.push(r),
      e._prev && Jr(e._prev, t, n)),
    t
  );
}
function Qr(e, t) {
  var n = t ? t._numPrev + 1 : 0;
  n < na && ((e._prev = t), (e._numPrev = n));
}
function Bt() {
  Ct() && Dt();
}
function Ct() {
  var e = kn;
  return (kn = !1), (zt = !1), e;
}
function Dt() {
  var e, t, n;
  do
    for (; mt.length > 0; )
      for (e = mt, mt = [], n = e.length, t = 0; t < n; ++t) {
        var r = e[t];
        r[0].apply(null, r[1]);
      }
  while (mt.length > 0);
  (kn = !0), (zt = !0);
}
function rr() {
  var e = Xe;
  (Xe = []),
    e.forEach(function (r) {
      r._PSD.onunhandled.call(null, r._value, r);
    });
  for (var t = Wt.slice(0), n = t.length; n; ) t[--n]();
}
function oa(e) {
  function t() {
    e(), Wt.splice(Wt.indexOf(t), 1);
  }
  Wt.push(t),
    ++Je,
    At(function () {
      --Je === 0 && rr();
    }, []);
}
function ua(e) {
  Xe.some(function (t) {
    return t._value === e._value;
  }) || Xe.push(e);
}
function sa(e) {
  for (var t = Xe.length; t; )
    if (Xe[--t]._value === e._value) {
      Xe.splice(t, 1);
      return;
    }
}
function Ht(e) {
  return new R(St, !1, e);
}
function Z(e, t) {
  var n = K;
  return function () {
    var r = Ct(),
      i = K;
    try {
      return Ue(n, !0), e.apply(this, arguments);
    } catch (a) {
      t && t(a);
    } finally {
      Ue(i, !1), r && Dt();
    }
  };
}
var ie = { awaits: 0, echoes: 0, id: 0 },
  ca = 0,
  $t = [],
  ln = 0,
  Xt = 0,
  la = 0;
function je(e, t, n, r) {
  var i = K,
    a = Object.create(i);
  (a.parent = i), (a.ref = 0), (a.global = !1), (a.id = ++la);
  var o = at.env;
  (a.env = tr
    ? {
        Promise: R,
        PromiseProp: { value: R, configurable: !0, writable: !0 },
        all: R.all,
        race: R.race,
        allSettled: R.allSettled,
        any: R.any,
        resolve: R.resolve,
        reject: R.reject,
        nthen: mr(o.nthen, a),
        gthen: mr(o.gthen, a),
      }
    : {}),
    t && se(a, t),
    ++i.ref,
    (a.finalize = function () {
      --this.parent.ref || this.parent.finalize();
    });
  var u = lt(a, e, n, r);
  return a.ref === 0 && a.finalize(), u;
}
function ct() {
  return ie.id || (ie.id = ++ca), ++ie.awaits, (ie.echoes += Yr), ie.id;
}
function De() {
  return ie.awaits ? (--ie.awaits === 0 && (ie.id = 0), (ie.echoes = ie.awaits * Yr), !0) : !1;
}
('' + qr).indexOf('[native code]') === -1 && (ct = De = q);
function Jt(e) {
  return ie.echoes && e && e.constructor === Lt
    ? (ct(),
      e.then(
        function (t) {
          return De(), t;
        },
        function (t) {
          return De(), ne(t);
        }
      ))
    : e;
}
function fa(e) {
  ++Xt, (!ie.echoes || --ie.echoes === 0) && (ie.echoes = ie.id = 0), $t.push(K), Ue(e, !0);
}
function da() {
  var e = $t[$t.length - 1];
  $t.pop(), Ue(e, !1);
}
function Ue(e, t) {
  var n = K;
  if (
    ((t ? ie.echoes && (!ln++ || e !== K) : ln && (!--ln || e !== K)) &&
      ei(t ? fa.bind(null, e) : da),
    e !== K && ((K = e), n === at && (at.env = Zr()), tr))
  ) {
    var r = at.env.Promise,
      i = e.env;
    (Gt.then = i.nthen),
      (r.prototype.then = i.gthen),
      (n.global || e.global) &&
        (Object.defineProperty(J, 'Promise', i.PromiseProp),
        (r.all = i.all),
        (r.race = i.race),
        (r.resolve = i.resolve),
        (r.reject = i.reject),
        i.allSettled && (r.allSettled = i.allSettled),
        i.any && (r.any = i.any));
  }
}
function Zr() {
  var e = J.Promise;
  return tr
    ? {
        Promise: e,
        PromiseProp: Object.getOwnPropertyDescriptor(J, 'Promise'),
        all: e.all,
        race: e.race,
        allSettled: e.allSettled,
        any: e.any,
        resolve: e.resolve,
        reject: e.reject,
        nthen: Gt.then,
        gthen: e.prototype.then,
      }
    : {};
}
function lt(e, t, n, r, i) {
  var a = K;
  try {
    return Ue(e, !0), t(n, r, i);
  } finally {
    Ue(a, !1);
  }
}
function ei(e) {
  qr.call(Tn, e);
}
function Qt(e, t, n, r) {
  return typeof e != 'function'
    ? e
    : function () {
        var i = K;
        n && ct(), Ue(t, !0);
        try {
          return e.apply(this, arguments);
        } finally {
          Ue(i, !1), r && ei(De);
        }
      };
}
function mr(e, t) {
  return function (n, r) {
    return e.call(this, Qt(n, t), Qt(r, t));
  };
}
var gr = 'unhandledrejection';
function wr(e, t) {
  var n;
  try {
    n = t.onuncatched(e);
  } catch {}
  if (n !== !1)
    try {
      var r,
        i = { promise: t, reason: e };
      if (
        (J.document && document.createEvent
          ? ((r = document.createEvent('Event')), r.initEvent(gr, !0, !0), se(r, i))
          : J.CustomEvent && ((r = new CustomEvent(gr, { detail: i })), se(r, i)),
        r &&
          J.dispatchEvent &&
          (dispatchEvent(r), !J.PromiseRejectionEvent && J.onunhandledrejection))
      )
        try {
          J.onunhandledrejection(r);
        } catch {}
      Ee && r && !r.defaultPrevented && console.warn('Unhandled rejection: ' + (e.stack || e));
    } catch {}
}
var ne = R.reject;
function Pn(e, t, n, r) {
  if (!e.idbdb || (!e._state.openComplete && !K.letThrough && !e._vip)) {
    if (e._state.openComplete) return ne(new N.DatabaseClosed(e._state.dbOpenError));
    if (!e._state.isBeingOpened) {
      if (!e._options.autoOpen) return ne(new N.DatabaseClosed());
      e.open().catch(q);
    }
    return e._state.dbReadyPromise.then(function () {
      return Pn(e, t, n, r);
    });
  } else {
    var i = e._createTransaction(t, n, e._dbSchema);
    try {
      i.create(), (e._state.PR1398_maxLoop = 3);
    } catch (a) {
      return a.name === Qn.InvalidState && e.isOpen() && --e._state.PR1398_maxLoop > 0
        ? (console.warn('Dexie: Need to reopen db'),
          e._close(),
          e.open().then(function () {
            return Pn(e, t, n, r);
          }))
        : ne(a);
    }
    return i
      ._promise(t, function (a, o) {
        return je(function () {
          return (K.trans = i), r(a, o, i);
        });
      })
      .then(function (a) {
        return i._completion.then(function () {
          return a;
        });
      });
  }
}
var _r = '3.2.2',
  ze = String.fromCharCode(65535),
  Kn = -1 / 0,
  Se =
    'Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.',
  ti = 'String expected.',
  _t = [],
  an = typeof navigator < 'u' && /(MSIE|Trident|Edge)/.test(navigator.userAgent),
  ha = an,
  va = an,
  ni = function (e) {
    return !/(dexie\.js|dexie\.min\.js)/.test(e);
  },
  on = '__dbnames',
  fn = 'readonly',
  dn = 'readwrite';
function Ze(e, t) {
  return e
    ? t
      ? function () {
          return e.apply(this, arguments) && t.apply(this, arguments);
        }
      : e
    : t;
}
var ri = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
function Nt(e) {
  return typeof e == 'string' && !/\./.test(e)
    ? function (t) {
        return t[e] === void 0 && e in t && ((t = Ot(t)), delete t[e]), t;
      }
    : function (t) {
        return t;
      };
}
var pa = (function () {
  function e() {}
  return (
    (e.prototype._trans = function (t, n, r) {
      var i = this._tx || K.trans,
        a = this.name;
      function o(s, c, d) {
        if (!d.schema[a]) throw new N.NotFound('Table ' + a + ' not part of transaction');
        return n(d.idbtrans, d);
      }
      var u = Ct();
      try {
        return i && i.db === this.db
          ? i === K.trans
            ? i._promise(t, o, r)
            : je(
                function () {
                  return i._promise(t, o, r);
                },
                { trans: i, transless: K.transless || K }
              )
          : Pn(this.db, t, [this.name], o);
      } finally {
        u && Dt();
      }
    }),
    (e.prototype.get = function (t, n) {
      var r = this;
      return t && t.constructor === Object
        ? this.where(t).first(n)
        : this._trans('readonly', function (i) {
            return r.core.get({ trans: i, key: t }).then(function (a) {
              return r.hook.reading.fire(a);
            });
          }).then(n);
    }),
    (e.prototype.where = function (t) {
      if (typeof t == 'string') return new this.db.WhereClause(this, t);
      if (ae(t)) return new this.db.WhereClause(this, '[' + t.join('+') + ']');
      var n = te(t);
      if (n.length === 1) return this.where(n[0]).equals(t[n[0]]);
      var r = this.schema.indexes.concat(this.schema.primKey).filter(function (d) {
        return (
          d.compound &&
          n.every(function (l) {
            return d.keyPath.indexOf(l) >= 0;
          }) &&
          d.keyPath.every(function (l) {
            return n.indexOf(l) >= 0;
          })
        );
      })[0];
      if (r && this.db._maxKey !== ze)
        return this.where(r.name).equals(
          r.keyPath.map(function (d) {
            return t[d];
          })
        );
      !r &&
        Ee &&
        console.warn(
          'The query ' +
            JSON.stringify(t) +
            ' on ' +
            this.name +
            ' would benefit of a ' +
            ('compound index [' + n.join('+') + ']')
        );
      var i = this.schema.idxByName,
        a = this.db._deps.indexedDB;
      function o(d, l) {
        try {
          return a.cmp(d, l) === 0;
        } catch {
          return !1;
        }
      }
      var u = n.reduce(
          function (d, l) {
            var h = d[0],
              w = d[1],
              p = i[l],
              v = t[l];
            return [
              h || p,
              h || !p
                ? Ze(
                    w,
                    p && p.multi
                      ? function (m) {
                          var E = Re(m, l);
                          return (
                            ae(E) &&
                            E.some(function (S) {
                              return o(v, S);
                            })
                          );
                        }
                      : function (m) {
                          return o(v, Re(m, l));
                        }
                  )
                : w,
            ];
          },
          [null, null]
        ),
        s = u[0],
        c = u[1];
      return s
        ? this.where(s.name).equals(t[s.keyPath]).filter(c)
        : r
        ? this.filter(c)
        : this.where(n).equals('');
    }),
    (e.prototype.filter = function (t) {
      return this.toCollection().and(t);
    }),
    (e.prototype.count = function (t) {
      return this.toCollection().count(t);
    }),
    (e.prototype.offset = function (t) {
      return this.toCollection().offset(t);
    }),
    (e.prototype.limit = function (t) {
      return this.toCollection().limit(t);
    }),
    (e.prototype.each = function (t) {
      return this.toCollection().each(t);
    }),
    (e.prototype.toArray = function (t) {
      return this.toCollection().toArray(t);
    }),
    (e.prototype.toCollection = function () {
      return new this.db.Collection(new this.db.WhereClause(this));
    }),
    (e.prototype.orderBy = function (t) {
      return new this.db.Collection(
        new this.db.WhereClause(this, ae(t) ? '[' + t.join('+') + ']' : t)
      );
    }),
    (e.prototype.reverse = function () {
      return this.toCollection().reverse();
    }),
    (e.prototype.mapToClass = function (t) {
      this.schema.mappedClass = t;
      var n = function (r) {
        if (!r) return r;
        var i = Object.create(t.prototype);
        for (var a in r)
          if (ve(r, a))
            try {
              i[a] = r[a];
            } catch {}
        return i;
      };
      return (
        this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook),
        (this.schema.readHook = n),
        this.hook('reading', n),
        t
      );
    }),
    (e.prototype.defineClass = function () {
      function t(n) {
        se(this, n);
      }
      return this.mapToClass(t);
    }),
    (e.prototype.add = function (t, n) {
      var r = this,
        i = this.schema.primKey,
        a = i.auto,
        o = i.keyPath,
        u = t;
      return (
        o && a && (u = Nt(o)(t)),
        this._trans('readwrite', function (s) {
          return r.core.mutate({
            trans: s,
            type: 'add',
            keys: n != null ? [n] : null,
            values: [u],
          });
        })
          .then(function (s) {
            return s.numFailures ? R.reject(s.failures[0]) : s.lastResult;
          })
          .then(function (s) {
            if (o)
              try {
                ge(t, o, s);
              } catch {}
            return s;
          })
      );
    }),
    (e.prototype.update = function (t, n) {
      if (typeof t == 'object' && !ae(t)) {
        var r = Re(t, this.schema.primKey.keyPath);
        if (r === void 0)
          return ne(new N.InvalidArgument('Given object does not contain its primary key'));
        try {
          typeof n != 'function'
            ? te(n).forEach(function (i) {
                ge(t, i, n[i]);
              })
            : n(t, { value: t, primKey: r });
        } catch {}
        return this.where(':id').equals(r).modify(n);
      } else return this.where(':id').equals(t).modify(n);
    }),
    (e.prototype.put = function (t, n) {
      var r = this,
        i = this.schema.primKey,
        a = i.auto,
        o = i.keyPath,
        u = t;
      return (
        o && a && (u = Nt(o)(t)),
        this._trans('readwrite', function (s) {
          return r.core.mutate({
            trans: s,
            type: 'put',
            values: [u],
            keys: n != null ? [n] : null,
          });
        })
          .then(function (s) {
            return s.numFailures ? R.reject(s.failures[0]) : s.lastResult;
          })
          .then(function (s) {
            if (o)
              try {
                ge(t, o, s);
              } catch {}
            return s;
          })
      );
    }),
    (e.prototype.delete = function (t) {
      var n = this;
      return this._trans('readwrite', function (r) {
        return n.core.mutate({ trans: r, type: 'delete', keys: [t] });
      }).then(function (r) {
        return r.numFailures ? R.reject(r.failures[0]) : void 0;
      });
    }),
    (e.prototype.clear = function () {
      var t = this;
      return this._trans('readwrite', function (n) {
        return t.core.mutate({ trans: n, type: 'deleteRange', range: ri });
      }).then(function (n) {
        return n.numFailures ? R.reject(n.failures[0]) : void 0;
      });
    }),
    (e.prototype.bulkGet = function (t) {
      var n = this;
      return this._trans('readonly', function (r) {
        return n.core.getMany({ keys: t, trans: r }).then(function (i) {
          return i.map(function (a) {
            return n.hook.reading.fire(a);
          });
        });
      });
    }),
    (e.prototype.bulkAdd = function (t, n, r) {
      var i = this,
        a = Array.isArray(n) ? n : void 0;
      r = r || (a ? void 0 : n);
      var o = r ? r.allKeys : void 0;
      return this._trans('readwrite', function (u) {
        var s = i.schema.primKey,
          c = s.auto,
          d = s.keyPath;
        if (d && a)
          throw new N.InvalidArgument(
            'bulkAdd(): keys argument invalid on tables with inbound keys'
          );
        if (a && a.length !== t.length)
          throw new N.InvalidArgument('Arguments objects and keys must have the same length');
        var l = t.length,
          h = d && c ? t.map(Nt(d)) : t;
        return i.core
          .mutate({ trans: u, type: 'add', keys: a, values: h, wantResults: o })
          .then(function (w) {
            var p = w.numFailures,
              v = w.results,
              m = w.lastResult,
              E = w.failures,
              S = o ? v : m;
            if (p === 0) return S;
            throw new wt(i.name + '.bulkAdd(): ' + p + ' of ' + l + ' operations failed', E);
          });
      });
    }),
    (e.prototype.bulkPut = function (t, n, r) {
      var i = this,
        a = Array.isArray(n) ? n : void 0;
      r = r || (a ? void 0 : n);
      var o = r ? r.allKeys : void 0;
      return this._trans('readwrite', function (u) {
        var s = i.schema.primKey,
          c = s.auto,
          d = s.keyPath;
        if (d && a)
          throw new N.InvalidArgument(
            'bulkPut(): keys argument invalid on tables with inbound keys'
          );
        if (a && a.length !== t.length)
          throw new N.InvalidArgument('Arguments objects and keys must have the same length');
        var l = t.length,
          h = d && c ? t.map(Nt(d)) : t;
        return i.core
          .mutate({ trans: u, type: 'put', keys: a, values: h, wantResults: o })
          .then(function (w) {
            var p = w.numFailures,
              v = w.results,
              m = w.lastResult,
              E = w.failures,
              S = o ? v : m;
            if (p === 0) return S;
            throw new wt(i.name + '.bulkPut(): ' + p + ' of ' + l + ' operations failed', E);
          });
      });
    }),
    (e.prototype.bulkDelete = function (t) {
      var n = this,
        r = t.length;
      return this._trans('readwrite', function (i) {
        return n.core.mutate({ trans: i, type: 'delete', keys: t });
      }).then(function (i) {
        var a = i.numFailures,
          o = i.lastResult,
          u = i.failures;
        if (a === 0) return o;
        throw new wt(n.name + '.bulkDelete(): ' + a + ' of ' + r + ' operations failed', u);
      });
    }),
    e
  );
})();
function Pt(e) {
  var t = {},
    n = function (u, s) {
      if (s) {
        for (var c = arguments.length, d = new Array(c - 1); --c; ) d[c - 1] = arguments[c];
        return t[u].subscribe.apply(null, d), e;
      } else if (typeof u == 'string') return t[u];
    };
  n.addEventType = a;
  for (var r = 1, i = arguments.length; r < i; ++r) a(arguments[r]);
  return n;
  function a(u, s, c) {
    if (typeof u == 'object') return o(u);
    s || (s = ta), c || (c = q);
    var d = {
      subscribers: [],
      fire: c,
      subscribe: function (l) {
        d.subscribers.indexOf(l) === -1 && (d.subscribers.push(l), (d.fire = s(d.fire, l)));
      },
      unsubscribe: function (l) {
        (d.subscribers = d.subscribers.filter(function (h) {
          return h !== l;
        })),
          (d.fire = d.subscribers.reduce(s, c));
      },
    };
    return (t[u] = n[u] = d), d;
  }
  function o(u) {
    te(u).forEach(function (s) {
      var c = u[s];
      if (ae(c)) a(s, u[s][0], u[s][1]);
      else if (c === 'asap')
        var d = a(s, Rt, function () {
          for (var h = arguments.length, w = new Array(h); h--; ) w[h] = arguments[h];
          d.subscribers.forEach(function (p) {
            Nr(function () {
              p.apply(null, w);
            });
          });
        });
      else throw new N.InvalidArgument('Invalid event config');
    });
  }
}
function Kt(e, t) {
  return ut(t).from({ prototype: e }), t;
}
function ya(e) {
  return Kt(pa.prototype, function (n, r, i) {
    (this.db = e),
      (this._tx = i),
      (this.name = n),
      (this.schema = r),
      (this.hook = e._allTables[n]
        ? e._allTables[n].hook
        : Pt(null, { creating: [Qi, q], reading: [Ji, Rt], updating: [ea, q], deleting: [Zi, q] }));
  });
}
function nt(e, t) {
  return !(e.filter || e.algorithm || e.or) && (t ? e.justLimit : !e.replayFilter);
}
function hn(e, t) {
  e.filter = Ze(e.filter, t);
}
function vn(e, t, n) {
  var r = e.replayFilter;
  (e.replayFilter = r
    ? function () {
        return Ze(r(), t());
      }
    : t),
    (e.justLimit = n && !r);
}
function ma(e, t) {
  e.isMatch = Ze(e.isMatch, t);
}
function Yt(e, t) {
  if (e.isPrimKey) return t.primaryKey;
  var n = t.getIndexByKeyPath(e.index);
  if (!n)
    throw new N.Schema('KeyPath ' + e.index + ' on object store ' + t.name + ' is not indexed');
  return n;
}
function br(e, t, n) {
  var r = Yt(e, t.schema);
  return t.openCursor({
    trans: n,
    values: !e.keysOnly,
    reverse: e.dir === 'prev',
    unique: !!e.unique,
    query: { index: r, range: e.range },
  });
}
function Ft(e, t, n, r) {
  var i = e.replayFilter ? Ze(e.filter, e.replayFilter()) : e.filter;
  if (e.or) {
    var a = {},
      o = function (u, s, c) {
        if (
          !i ||
          i(
            s,
            c,
            function (h) {
              return s.stop(h);
            },
            function (h) {
              return s.fail(h);
            }
          )
        ) {
          var d = s.primaryKey,
            l = '' + d;
          l === '[object ArrayBuffer]' && (l = '' + new Uint8Array(d)),
            ve(a, l) || ((a[l] = !0), t(u, s, c));
        }
      };
    return Promise.all([
      e.or._iterate(o, n),
      Er(br(e, r, n), e.algorithm, o, !e.keysOnly && e.valueMapper),
    ]);
  } else return Er(br(e, r, n), Ze(e.algorithm, i), t, !e.keysOnly && e.valueMapper);
}
function Er(e, t, n, r) {
  var i = r
      ? function (o, u, s) {
          return n(r(o), u, s);
        }
      : n,
    a = Z(i);
  return e.then(function (o) {
    if (o)
      return o.start(function () {
        var u = function () {
          return o.continue();
        };
        (!t ||
          t(
            o,
            function (s) {
              return (u = s);
            },
            function (s) {
              o.stop(s), (u = q);
            },
            function (s) {
              o.fail(s), (u = q);
            }
          )) &&
          a(o.value, o, function (s) {
            return (u = s);
          }),
          u();
      });
  });
}
function ue(e, t) {
  try {
    var n = Sr(e),
      r = Sr(t);
    if (n !== r)
      return n === 'Array'
        ? 1
        : r === 'Array'
        ? -1
        : n === 'binary'
        ? 1
        : r === 'binary'
        ? -1
        : n === 'string'
        ? 1
        : r === 'string'
        ? -1
        : n === 'Date'
        ? 1
        : r !== 'Date'
        ? NaN
        : -1;
    switch (n) {
      case 'number':
      case 'Date':
      case 'string':
        return e > t ? 1 : e < t ? -1 : 0;
      case 'binary':
        return wa(Ar(e), Ar(t));
      case 'Array':
        return ga(e, t);
    }
  } catch {}
  return NaN;
}
function ga(e, t) {
  for (var n = e.length, r = t.length, i = n < r ? n : r, a = 0; a < i; ++a) {
    var o = ue(e[a], t[a]);
    if (o !== 0) return o;
  }
  return n === r ? 0 : n < r ? -1 : 1;
}
function wa(e, t) {
  for (var n = e.length, r = t.length, i = n < r ? n : r, a = 0; a < i; ++a)
    if (e[a] !== t[a]) return e[a] < t[a] ? -1 : 1;
  return n === r ? 0 : n < r ? -1 : 1;
}
function Sr(e) {
  var t = typeof e;
  if (t !== 'object') return t;
  if (ArrayBuffer.isView(e)) return 'binary';
  var n = En(e);
  return n === 'ArrayBuffer' ? 'binary' : n;
}
function Ar(e) {
  return e instanceof Uint8Array
    ? e
    : ArrayBuffer.isView(e)
    ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
    : new Uint8Array(e);
}
var _a = (function () {
    function e() {}
    return (
      (e.prototype._read = function (t, n) {
        var r = this._ctx;
        return r.error
          ? r.table._trans(null, ne.bind(null, r.error))
          : r.table._trans('readonly', t).then(n);
      }),
      (e.prototype._write = function (t) {
        var n = this._ctx;
        return n.error
          ? n.table._trans(null, ne.bind(null, n.error))
          : n.table._trans('readwrite', t, 'locked');
      }),
      (e.prototype._addAlgorithm = function (t) {
        var n = this._ctx;
        n.algorithm = Ze(n.algorithm, t);
      }),
      (e.prototype._iterate = function (t, n) {
        return Ft(this._ctx, t, n, this._ctx.table.core);
      }),
      (e.prototype.clone = function (t) {
        var n = Object.create(this.constructor.prototype),
          r = Object.create(this._ctx);
        return t && se(r, t), (n._ctx = r), n;
      }),
      (e.prototype.raw = function () {
        return (this._ctx.valueMapper = null), this;
      }),
      (e.prototype.each = function (t) {
        var n = this._ctx;
        return this._read(function (r) {
          return Ft(n, t, r, n.table.core);
        });
      }),
      (e.prototype.count = function (t) {
        var n = this;
        return this._read(function (r) {
          var i = n._ctx,
            a = i.table.core;
          if (nt(i, !0))
            return a
              .count({ trans: r, query: { index: Yt(i, a.schema), range: i.range } })
              .then(function (u) {
                return Math.min(u, i.limit);
              });
          var o = 0;
          return Ft(
            i,
            function () {
              return ++o, !1;
            },
            r,
            a
          ).then(function () {
            return o;
          });
        }).then(t);
      }),
      (e.prototype.sortBy = function (t, n) {
        var r = t.split('.').reverse(),
          i = r[0],
          a = r.length - 1;
        function o(c, d) {
          return d ? o(c[r[d]], d - 1) : c[i];
        }
        var u = this._ctx.dir === 'next' ? 1 : -1;
        function s(c, d) {
          var l = o(c, a),
            h = o(d, a);
          return l < h ? -u : l > h ? u : 0;
        }
        return this.toArray(function (c) {
          return c.sort(s);
        }).then(n);
      }),
      (e.prototype.toArray = function (t) {
        var n = this;
        return this._read(function (r) {
          var i = n._ctx;
          if (i.dir === 'next' && nt(i, !0) && i.limit > 0) {
            var a = i.valueMapper,
              o = Yt(i, i.table.core.schema);
            return i.table.core
              .query({ trans: r, limit: i.limit, values: !0, query: { index: o, range: i.range } })
              .then(function (s) {
                var c = s.result;
                return a ? c.map(a) : c;
              });
          } else {
            var u = [];
            return Ft(
              i,
              function (s) {
                return u.push(s);
              },
              r,
              i.table.core
            ).then(function () {
              return u;
            });
          }
        }, t);
      }),
      (e.prototype.offset = function (t) {
        var n = this._ctx;
        return t <= 0
          ? this
          : ((n.offset += t),
            nt(n)
              ? vn(n, function () {
                  var r = t;
                  return function (i, a) {
                    return r === 0
                      ? !0
                      : r === 1
                      ? (--r, !1)
                      : (a(function () {
                          i.advance(r), (r = 0);
                        }),
                        !1);
                  };
                })
              : vn(n, function () {
                  var r = t;
                  return function () {
                    return --r < 0;
                  };
                }),
            this);
      }),
      (e.prototype.limit = function (t) {
        return (
          (this._ctx.limit = Math.min(this._ctx.limit, t)),
          vn(
            this._ctx,
            function () {
              var n = t;
              return function (r, i, a) {
                return --n <= 0 && i(a), n >= 0;
              };
            },
            !0
          ),
          this
        );
      }),
      (e.prototype.until = function (t, n) {
        return (
          hn(this._ctx, function (r, i, a) {
            return t(r.value) ? (i(a), n) : !0;
          }),
          this
        );
      }),
      (e.prototype.first = function (t) {
        return this.limit(1)
          .toArray(function (n) {
            return n[0];
          })
          .then(t);
      }),
      (e.prototype.last = function (t) {
        return this.reverse().first(t);
      }),
      (e.prototype.filter = function (t) {
        return (
          hn(this._ctx, function (n) {
            return t(n.value);
          }),
          ma(this._ctx, t),
          this
        );
      }),
      (e.prototype.and = function (t) {
        return this.filter(t);
      }),
      (e.prototype.or = function (t) {
        return new this.db.WhereClause(this._ctx.table, t, this);
      }),
      (e.prototype.reverse = function () {
        return (
          (this._ctx.dir = this._ctx.dir === 'prev' ? 'next' : 'prev'),
          this._ondirectionchange && this._ondirectionchange(this._ctx.dir),
          this
        );
      }),
      (e.prototype.desc = function () {
        return this.reverse();
      }),
      (e.prototype.eachKey = function (t) {
        var n = this._ctx;
        return (
          (n.keysOnly = !n.isMatch),
          this.each(function (r, i) {
            t(i.key, i);
          })
        );
      }),
      (e.prototype.eachUniqueKey = function (t) {
        return (this._ctx.unique = 'unique'), this.eachKey(t);
      }),
      (e.prototype.eachPrimaryKey = function (t) {
        var n = this._ctx;
        return (
          (n.keysOnly = !n.isMatch),
          this.each(function (r, i) {
            t(i.primaryKey, i);
          })
        );
      }),
      (e.prototype.keys = function (t) {
        var n = this._ctx;
        n.keysOnly = !n.isMatch;
        var r = [];
        return this.each(function (i, a) {
          r.push(a.key);
        })
          .then(function () {
            return r;
          })
          .then(t);
      }),
      (e.prototype.primaryKeys = function (t) {
        var n = this._ctx;
        if (n.dir === 'next' && nt(n, !0) && n.limit > 0)
          return this._read(function (i) {
            var a = Yt(n, n.table.core.schema);
            return n.table.core.query({
              trans: i,
              values: !1,
              limit: n.limit,
              query: { index: a, range: n.range },
            });
          })
            .then(function (i) {
              var a = i.result;
              return a;
            })
            .then(t);
        n.keysOnly = !n.isMatch;
        var r = [];
        return this.each(function (i, a) {
          r.push(a.primaryKey);
        })
          .then(function () {
            return r;
          })
          .then(t);
      }),
      (e.prototype.uniqueKeys = function (t) {
        return (this._ctx.unique = 'unique'), this.keys(t);
      }),
      (e.prototype.firstKey = function (t) {
        return this.limit(1)
          .keys(function (n) {
            return n[0];
          })
          .then(t);
      }),
      (e.prototype.lastKey = function (t) {
        return this.reverse().firstKey(t);
      }),
      (e.prototype.distinct = function () {
        var t = this._ctx,
          n = t.index && t.table.schema.idxByName[t.index];
        if (!n || !n.multi) return this;
        var r = {};
        return (
          hn(this._ctx, function (i) {
            var a = i.primaryKey.toString(),
              o = ve(r, a);
            return (r[a] = !0), !o;
          }),
          this
        );
      }),
      (e.prototype.modify = function (t) {
        var n = this,
          r = this._ctx;
        return this._write(function (i) {
          var a;
          if (typeof t == 'function') a = t;
          else {
            var o = te(t),
              u = o.length;
            a = function (E) {
              for (var S = !1, g = 0; g < u; ++g) {
                var _ = o[g],
                  y = t[_];
                Re(E, _) !== y && (ge(E, _, y), (S = !0));
              }
              return S;
            };
          }
          var s = r.table.core,
            c = s.schema.primaryKey,
            d = c.outbound,
            l = c.extractKey,
            h = n.db._options.modifyChunkSize || 200,
            w = [],
            p = 0,
            v = [],
            m = function (E, S) {
              var g = S.failures,
                _ = S.numFailures;
              p += E - _;
              for (var y = 0, A = te(g); y < A.length; y++) {
                var D = A[y];
                w.push(g[D]);
              }
            };
          return n
            .clone()
            .primaryKeys()
            .then(function (E) {
              var S = function (g) {
                var _ = Math.min(h, E.length - g);
                return s
                  .getMany({ trans: i, keys: E.slice(g, g + _), cache: 'immutable' })
                  .then(function (y) {
                    for (var A = [], D = [], T = d ? [] : null, I = [], k = 0; k < _; ++k) {
                      var M = y[k],
                        U = { value: Ot(M), primKey: E[g + k] };
                      a.call(U, U.value, U) !== !1 &&
                        (U.value == null
                          ? I.push(E[g + k])
                          : !d && ue(l(M), l(U.value)) !== 0
                          ? (I.push(E[g + k]), A.push(U.value))
                          : (D.push(U.value), d && T.push(E[g + k])));
                    }
                    var j = nt(r) &&
                      r.limit === 1 / 0 &&
                      (typeof t != 'function' || t === pn) && { index: r.index, range: r.range };
                    return Promise.resolve(
                      A.length > 0 &&
                        s.mutate({ trans: i, type: 'add', values: A }).then(function (Q) {
                          for (var P in Q.failures) I.splice(parseInt(P), 1);
                          m(A.length, Q);
                        })
                    )
                      .then(function () {
                        return (
                          (D.length > 0 || (j && typeof t == 'object')) &&
                          s
                            .mutate({
                              trans: i,
                              type: 'put',
                              keys: T,
                              values: D,
                              criteria: j,
                              changeSpec: typeof t != 'function' && t,
                            })
                            .then(function (Q) {
                              return m(D.length, Q);
                            })
                        );
                      })
                      .then(function () {
                        return (
                          (I.length > 0 || (j && t === pn)) &&
                          s
                            .mutate({ trans: i, type: 'delete', keys: I, criteria: j })
                            .then(function (Q) {
                              return m(I.length, Q);
                            })
                        );
                      })
                      .then(function () {
                        return E.length > g + _ && S(g + h);
                      });
                  });
              };
              return S(0).then(function () {
                if (w.length > 0) throw new qt('Error modifying one or more objects', w, p, v);
                return E.length;
              });
            });
        });
      }),
      (e.prototype.delete = function () {
        var t = this._ctx,
          n = t.range;
        return nt(t) && ((t.isPrimKey && !va) || n.type === 3)
          ? this._write(function (r) {
              var i = t.table.core.schema.primaryKey,
                a = n;
              return t.table.core
                .count({ trans: r, query: { index: i, range: a } })
                .then(function (o) {
                  return t.table.core
                    .mutate({ trans: r, type: 'deleteRange', range: a })
                    .then(function (u) {
                      var s = u.failures;
                      u.lastResult, u.results;
                      var c = u.numFailures;
                      if (c)
                        throw new qt(
                          'Could not delete some values',
                          Object.keys(s).map(function (d) {
                            return s[d];
                          }),
                          o - c
                        );
                      return o - c;
                    });
                });
            })
          : this.modify(pn);
      }),
      e
    );
  })(),
  pn = function (e, t) {
    return (t.value = null);
  };
function ba(e) {
  return Kt(_a.prototype, function (n, r) {
    this.db = e;
    var i = ri,
      a = null;
    if (r)
      try {
        i = r();
      } catch (c) {
        a = c;
      }
    var o = n._ctx,
      u = o.table,
      s = u.hook.reading.fire;
    this._ctx = {
      table: u,
      index: o.index,
      isPrimKey: !o.index || (u.schema.primKey.keyPath && o.index === u.schema.primKey.name),
      range: i,
      keysOnly: !1,
      dir: 'next',
      unique: '',
      algorithm: null,
      filter: null,
      replayFilter: null,
      justLimit: !0,
      isMatch: null,
      offset: 0,
      limit: 1 / 0,
      error: a,
      or: o.or,
      valueMapper: s !== Rt ? s : null,
    };
  });
}
function Ea(e, t) {
  return e < t ? -1 : e === t ? 0 : 1;
}
function Sa(e, t) {
  return e > t ? -1 : e === t ? 0 : 1;
}
function he(e, t, n) {
  var r = e instanceof ai ? new e.Collection(e) : e;
  return (r._ctx.error = n ? new n(t) : new TypeError(t)), r;
}
function rt(e) {
  return new e.Collection(e, function () {
    return ii('');
  }).limit(0);
}
function Aa(e) {
  return e === 'next'
    ? function (t) {
        return t.toUpperCase();
      }
    : function (t) {
        return t.toLowerCase();
      };
}
function Ta(e) {
  return e === 'next'
    ? function (t) {
        return t.toLowerCase();
      }
    : function (t) {
        return t.toUpperCase();
      };
}
function Ia(e, t, n, r, i, a) {
  for (var o = Math.min(e.length, r.length), u = -1, s = 0; s < o; ++s) {
    var c = t[s];
    if (c !== r[s])
      return i(e[s], n[s]) < 0
        ? e.substr(0, s) + n[s] + n.substr(s + 1)
        : i(e[s], r[s]) < 0
        ? e.substr(0, s) + r[s] + n.substr(s + 1)
        : u >= 0
        ? e.substr(0, u) + t[u] + n.substr(u + 1)
        : null;
    i(e[s], c) < 0 && (u = s);
  }
  return o < r.length && a === 'next'
    ? e + n.substr(e.length)
    : o < e.length && a === 'prev'
    ? e.substr(0, n.length)
    : u < 0
    ? null
    : e.substr(0, u) + r[u] + n.substr(u + 1);
}
function jt(e, t, n, r) {
  var i,
    a,
    o,
    u,
    s,
    c,
    d,
    l = n.length;
  if (
    !n.every(function (v) {
      return typeof v == 'string';
    })
  )
    return he(e, ti);
  function h(v) {
    (i = Aa(v)), (a = Ta(v)), (o = v === 'next' ? Ea : Sa);
    var m = n
      .map(function (E) {
        return { lower: a(E), upper: i(E) };
      })
      .sort(function (E, S) {
        return o(E.lower, S.lower);
      });
    (u = m.map(function (E) {
      return E.upper;
    })),
      (s = m.map(function (E) {
        return E.lower;
      })),
      (c = v),
      (d = v === 'next' ? '' : r);
  }
  h('next');
  var w = new e.Collection(e, function () {
    return Pe(u[0], s[l - 1] + r);
  });
  w._ondirectionchange = function (v) {
    h(v);
  };
  var p = 0;
  return (
    w._addAlgorithm(function (v, m, E) {
      var S = v.key;
      if (typeof S != 'string') return !1;
      var g = a(S);
      if (t(g, s, p)) return !0;
      for (var _ = null, y = p; y < l; ++y) {
        var A = Ia(S, g, u[y], s[y], o, c);
        A === null && _ === null ? (p = y + 1) : (_ === null || o(_, A) > 0) && (_ = A);
      }
      return (
        m(
          _ !== null
            ? function () {
                v.continue(_ + d);
              }
            : E
        ),
        !1
      );
    }),
    w
  );
}
function Pe(e, t, n, r) {
  return { type: 2, lower: e, upper: t, lowerOpen: n, upperOpen: r };
}
function ii(e) {
  return { type: 1, lower: e, upper: e };
}
var ai = (function () {
  function e() {}
  return (
    Object.defineProperty(e.prototype, 'Collection', {
      get: function () {
        return this._ctx.table.db.Collection;
      },
      enumerable: !1,
      configurable: !0,
    }),
    (e.prototype.between = function (t, n, r, i) {
      (r = r !== !1), (i = i === !0);
      try {
        return this._cmp(t, n) > 0 || (this._cmp(t, n) === 0 && (r || i) && !(r && i))
          ? rt(this)
          : new this.Collection(this, function () {
              return Pe(t, n, !r, !i);
            });
      } catch {
        return he(this, Se);
      }
    }),
    (e.prototype.equals = function (t) {
      return t == null
        ? he(this, Se)
        : new this.Collection(this, function () {
            return ii(t);
          });
    }),
    (e.prototype.above = function (t) {
      return t == null
        ? he(this, Se)
        : new this.Collection(this, function () {
            return Pe(t, void 0, !0);
          });
    }),
    (e.prototype.aboveOrEqual = function (t) {
      return t == null
        ? he(this, Se)
        : new this.Collection(this, function () {
            return Pe(t, void 0, !1);
          });
    }),
    (e.prototype.below = function (t) {
      return t == null
        ? he(this, Se)
        : new this.Collection(this, function () {
            return Pe(void 0, t, !1, !0);
          });
    }),
    (e.prototype.belowOrEqual = function (t) {
      return t == null
        ? he(this, Se)
        : new this.Collection(this, function () {
            return Pe(void 0, t);
          });
    }),
    (e.prototype.startsWith = function (t) {
      return typeof t != 'string' ? he(this, ti) : this.between(t, t + ze, !0, !0);
    }),
    (e.prototype.startsWithIgnoreCase = function (t) {
      return t === ''
        ? this.startsWith(t)
        : jt(
            this,
            function (n, r) {
              return n.indexOf(r[0]) === 0;
            },
            [t],
            ze
          );
    }),
    (e.prototype.equalsIgnoreCase = function (t) {
      return jt(
        this,
        function (n, r) {
          return n === r[0];
        },
        [t],
        ''
      );
    }),
    (e.prototype.anyOfIgnoreCase = function () {
      var t = ke.apply(it, arguments);
      return t.length === 0
        ? rt(this)
        : jt(
            this,
            function (n, r) {
              return r.indexOf(n) !== -1;
            },
            t,
            ''
          );
    }),
    (e.prototype.startsWithAnyOfIgnoreCase = function () {
      var t = ke.apply(it, arguments);
      return t.length === 0
        ? rt(this)
        : jt(
            this,
            function (n, r) {
              return r.some(function (i) {
                return n.indexOf(i) === 0;
              });
            },
            t,
            ze
          );
    }),
    (e.prototype.anyOf = function () {
      var t = this,
        n = ke.apply(it, arguments),
        r = this._cmp;
      try {
        n.sort(r);
      } catch {
        return he(this, Se);
      }
      if (n.length === 0) return rt(this);
      var i = new this.Collection(this, function () {
        return Pe(n[0], n[n.length - 1]);
      });
      i._ondirectionchange = function (o) {
        (r = o === 'next' ? t._ascending : t._descending), n.sort(r);
      };
      var a = 0;
      return (
        i._addAlgorithm(function (o, u, s) {
          for (var c = o.key; r(c, n[a]) > 0; ) if ((++a, a === n.length)) return u(s), !1;
          return r(c, n[a]) === 0
            ? !0
            : (u(function () {
                o.continue(n[a]);
              }),
              !1);
        }),
        i
      );
    }),
    (e.prototype.notEqual = function (t) {
      return this.inAnyRange(
        [
          [Kn, t],
          [t, this.db._maxKey],
        ],
        { includeLowers: !1, includeUppers: !1 }
      );
    }),
    (e.prototype.noneOf = function () {
      var t = ke.apply(it, arguments);
      if (t.length === 0) return new this.Collection(this);
      try {
        t.sort(this._ascending);
      } catch {
        return he(this, Se);
      }
      var n = t.reduce(function (r, i) {
        return r ? r.concat([[r[r.length - 1][1], i]]) : [[Kn, i]];
      }, null);
      return (
        n.push([t[t.length - 1], this.db._maxKey]),
        this.inAnyRange(n, { includeLowers: !1, includeUppers: !1 })
      );
    }),
    (e.prototype.inAnyRange = function (t, n) {
      var r = this,
        i = this._cmp,
        a = this._ascending,
        o = this._descending,
        u = this._min,
        s = this._max;
      if (t.length === 0) return rt(this);
      if (
        !t.every(function (y) {
          return y[0] !== void 0 && y[1] !== void 0 && a(y[0], y[1]) <= 0;
        })
      )
        return he(
          this,
          'First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower',
          N.InvalidArgument
        );
      var c = !n || n.includeLowers !== !1,
        d = n && n.includeUppers === !0;
      function l(y, A) {
        for (var D = 0, T = y.length; D < T; ++D) {
          var I = y[D];
          if (i(A[0], I[1]) < 0 && i(A[1], I[0]) > 0) {
            (I[0] = u(I[0], A[0])), (I[1] = s(I[1], A[1]));
            break;
          }
        }
        return D === T && y.push(A), y;
      }
      var h = a;
      function w(y, A) {
        return h(y[0], A[0]);
      }
      var p;
      try {
        (p = t.reduce(l, [])), p.sort(w);
      } catch {
        return he(this, Se);
      }
      var v = 0,
        m = d
          ? function (y) {
              return a(y, p[v][1]) > 0;
            }
          : function (y) {
              return a(y, p[v][1]) >= 0;
            },
        E = c
          ? function (y) {
              return o(y, p[v][0]) > 0;
            }
          : function (y) {
              return o(y, p[v][0]) >= 0;
            };
      function S(y) {
        return !m(y) && !E(y);
      }
      var g = m,
        _ = new this.Collection(this, function () {
          return Pe(p[0][0], p[p.length - 1][1], !c, !d);
        });
      return (
        (_._ondirectionchange = function (y) {
          y === 'next' ? ((g = m), (h = a)) : ((g = E), (h = o)), p.sort(w);
        }),
        _._addAlgorithm(function (y, A, D) {
          for (var T = y.key; g(T); ) if ((++v, v === p.length)) return A(D), !1;
          return S(T)
            ? !0
            : (r._cmp(T, p[v][1]) === 0 ||
                r._cmp(T, p[v][0]) === 0 ||
                A(function () {
                  h === a ? y.continue(p[v][0]) : y.continue(p[v][1]);
                }),
              !1);
        }),
        _
      );
    }),
    (e.prototype.startsWithAnyOf = function () {
      var t = ke.apply(it, arguments);
      return t.every(function (n) {
        return typeof n == 'string';
      })
        ? t.length === 0
          ? rt(this)
          : this.inAnyRange(
              t.map(function (n) {
                return [n, n + ze];
              })
            )
        : he(this, 'startsWithAnyOf() only works with strings');
    }),
    e
  );
})();
function xa(e) {
  return Kt(ai.prototype, function (n, r, i) {
    (this.db = e), (this._ctx = { table: n, index: r === ':id' ? null : r, or: i });
    var a = e._deps.indexedDB;
    if (!a) throw new N.MissingAPI();
    (this._cmp = this._ascending = a.cmp.bind(a)),
      (this._descending = function (o, u) {
        return a.cmp(u, o);
      }),
      (this._max = function (o, u) {
        return a.cmp(o, u) > 0 ? o : u;
      }),
      (this._min = function (o, u) {
        return a.cmp(o, u) < 0 ? o : u;
      }),
      (this._IDBKeyRange = e._deps.IDBKeyRange);
  });
}
function be(e) {
  return Z(function (t) {
    return Tt(t), e(t.target.error), !1;
  });
}
function Tt(e) {
  e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
}
var It = 'storagemutated',
  Fe = 'x-storagemutated-1',
  Le = Pt(null, It),
  ka = (function () {
    function e() {}
    return (
      (e.prototype._lock = function () {
        return (
          yt(!K.global),
          ++this._reculock,
          this._reculock === 1 && !K.global && (K.lockOwnerFor = this),
          this
        );
      }),
      (e.prototype._unlock = function () {
        if ((yt(!K.global), --this._reculock === 0))
          for (
            K.global || (K.lockOwnerFor = null);
            this._blockedFuncs.length > 0 && !this._locked();

          ) {
            var t = this._blockedFuncs.shift();
            try {
              lt(t[1], t[0]);
            } catch {}
          }
        return this;
      }),
      (e.prototype._locked = function () {
        return this._reculock && K.lockOwnerFor !== this;
      }),
      (e.prototype.create = function (t) {
        var n = this;
        if (!this.mode) return this;
        var r = this.db.idbdb,
          i = this.db._state.dbOpenError;
        if ((yt(!this.idbtrans), !t && !r))
          switch (i && i.name) {
            case 'DatabaseClosedError':
              throw new N.DatabaseClosed(i);
            case 'MissingAPIError':
              throw new N.MissingAPI(i.message, i);
            default:
              throw new N.OpenFailed(i);
          }
        if (!this.active) throw new N.TransactionInactive();
        return (
          yt(this._completion._state === null),
          (t = this.idbtrans =
            t ||
            (this.db.core
              ? this.db.core.transaction(this.storeNames, this.mode, {
                  durability: this.chromeTransactionDurability,
                })
              : r.transaction(this.storeNames, this.mode, {
                  durability: this.chromeTransactionDurability,
                }))),
          (t.onerror = Z(function (a) {
            Tt(a), n._reject(t.error);
          })),
          (t.onabort = Z(function (a) {
            Tt(a),
              n.active && n._reject(new N.Abort(t.error)),
              (n.active = !1),
              n.on('abort').fire(a);
          })),
          (t.oncomplete = Z(function () {
            (n.active = !1),
              n._resolve(),
              'mutatedParts' in t && Le.storagemutated.fire(t.mutatedParts);
          })),
          this
        );
      }),
      (e.prototype._promise = function (t, n, r) {
        var i = this;
        if (t === 'readwrite' && this.mode !== 'readwrite')
          return ne(new N.ReadOnly('Transaction is readonly'));
        if (!this.active) return ne(new N.TransactionInactive());
        if (this._locked())
          return new R(function (o, u) {
            i._blockedFuncs.push([
              function () {
                i._promise(t, n, r).then(o, u);
              },
              K,
            ]);
          });
        if (r)
          return je(function () {
            var o = new R(function (u, s) {
              i._lock();
              var c = n(u, s, i);
              c && c.then && c.then(u, s);
            });
            return (
              o.finally(function () {
                return i._unlock();
              }),
              (o._lib = !0),
              o
            );
          });
        var a = new R(function (o, u) {
          var s = n(o, u, i);
          s && s.then && s.then(o, u);
        });
        return (a._lib = !0), a;
      }),
      (e.prototype._root = function () {
        return this.parent ? this.parent._root() : this;
      }),
      (e.prototype.waitFor = function (t) {
        var n = this._root(),
          r = R.resolve(t);
        if (n._waitingFor)
          n._waitingFor = n._waitingFor.then(function () {
            return r;
          });
        else {
          (n._waitingFor = r), (n._waitingQueue = []);
          var i = n.idbtrans.objectStore(n.storeNames[0]);
          (function o() {
            for (++n._spinCount; n._waitingQueue.length; ) n._waitingQueue.shift()();
            n._waitingFor && (i.get(-1 / 0).onsuccess = o);
          })();
        }
        var a = n._waitingFor;
        return new R(function (o, u) {
          r.then(
            function (s) {
              return n._waitingQueue.push(Z(o.bind(null, s)));
            },
            function (s) {
              return n._waitingQueue.push(Z(u.bind(null, s)));
            }
          ).finally(function () {
            n._waitingFor === a && (n._waitingFor = null);
          });
        });
      }),
      (e.prototype.abort = function () {
        this.active &&
          ((this.active = !1), this.idbtrans && this.idbtrans.abort(), this._reject(new N.Abort()));
      }),
      (e.prototype.table = function (t) {
        var n = this._memoizedTables || (this._memoizedTables = {});
        if (ve(n, t)) return n[t];
        var r = this.schema[t];
        if (!r) throw new N.NotFound('Table ' + t + ' not part of transaction');
        var i = new this.db.Table(t, r, this);
        return (i.core = this.db.core.table(t)), (n[t] = i), i;
      }),
      e
    );
  })();
function Oa(e) {
  return Kt(ka.prototype, function (n, r, i, a, o) {
    var u = this;
    (this.db = e),
      (this.mode = n),
      (this.storeNames = r),
      (this.schema = i),
      (this.chromeTransactionDurability = a),
      (this.idbtrans = null),
      (this.on = Pt(this, 'complete', 'error', 'abort')),
      (this.parent = o || null),
      (this.active = !0),
      (this._reculock = 0),
      (this._blockedFuncs = []),
      (this._resolve = null),
      (this._reject = null),
      (this._waitingFor = null),
      (this._waitingQueue = null),
      (this._spinCount = 0),
      (this._completion = new R(function (s, c) {
        (u._resolve = s), (u._reject = c);
      })),
      this._completion.then(
        function () {
          (u.active = !1), u.on.complete.fire();
        },
        function (s) {
          var c = u.active;
          return (
            (u.active = !1),
            u.on.error.fire(s),
            u.parent ? u.parent._reject(s) : c && u.idbtrans && u.idbtrans.abort(),
            ne(s)
          );
        }
      );
  });
}
function Mn(e, t, n, r, i, a, o) {
  return {
    name: e,
    keyPath: t,
    unique: n,
    multi: r,
    auto: i,
    compound: a,
    src: (n && !o ? '&' : '') + (r ? '*' : '') + (i ? '++' : '') + oi(t),
  };
}
function oi(e) {
  return typeof e == 'string' ? e : e ? '[' + [].join.call(e, '+') + ']' : '';
}
function ui(e, t, n) {
  return {
    name: e,
    primKey: t,
    indexes: n,
    mappedClass: null,
    idxByName: Fr(n, function (r) {
      return [r.name, r];
    }),
  };
}
function Ra(e) {
  return e.length === 1 ? e[0] : e;
}
var xt = function (e) {
  try {
    return (
      e.only([[]]),
      (xt = function () {
        return [[]];
      }),
      [[]]
    );
  } catch {
    return (
      (xt = function () {
        return ze;
      }),
      ze
    );
  }
};
function Bn(e) {
  return e == null
    ? function () {}
    : typeof e == 'string'
    ? Ca(e)
    : function (t) {
        return Re(t, e);
      };
}
function Ca(e) {
  var t = e.split('.');
  return t.length === 1
    ? function (n) {
        return n[e];
      }
    : function (n) {
        return Re(n, e);
      };
}
function Tr(e) {
  return [].slice.call(e);
}
var Da = 0;
function bt(e) {
  return e == null ? ':id' : typeof e == 'string' ? e : '[' + e.join('+') + ']';
}
function Pa(e, t, n) {
  function r(l, h) {
    var w = Tr(l.objectStoreNames);
    return {
      schema: {
        name: l.name,
        tables: w
          .map(function (p) {
            return h.objectStore(p);
          })
          .map(function (p) {
            var v = p.keyPath,
              m = p.autoIncrement,
              E = ae(v),
              S = v == null,
              g = {},
              _ = {
                name: p.name,
                primaryKey: {
                  name: null,
                  isPrimaryKey: !0,
                  outbound: S,
                  compound: E,
                  keyPath: v,
                  autoIncrement: m,
                  unique: !0,
                  extractKey: Bn(v),
                },
                indexes: Tr(p.indexNames)
                  .map(function (y) {
                    return p.index(y);
                  })
                  .map(function (y) {
                    var A = y.name,
                      D = y.unique,
                      T = y.multiEntry,
                      I = y.keyPath,
                      k = ae(I),
                      M = {
                        name: A,
                        compound: k,
                        keyPath: I,
                        unique: D,
                        multiEntry: T,
                        extractKey: Bn(I),
                      };
                    return (g[bt(I)] = M), M;
                  }),
                getIndexByKeyPath: function (y) {
                  return g[bt(y)];
                },
              };
            return (g[':id'] = _.primaryKey), v != null && (g[bt(v)] = _.primaryKey), _;
          }),
      },
      hasGetAll:
        w.length > 0 &&
        'getAll' in h.objectStore(w[0]) &&
        !(
          typeof navigator < 'u' &&
          /Safari/.test(navigator.userAgent) &&
          !/(Chrome\/|Edge\/)/.test(navigator.userAgent) &&
          [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604
        ),
    };
  }
  function i(l) {
    if (l.type === 3) return null;
    if (l.type === 4) throw new Error('Cannot convert never type to IDBKeyRange');
    var h = l.lower,
      w = l.upper,
      p = l.lowerOpen,
      v = l.upperOpen,
      m =
        h === void 0
          ? w === void 0
            ? null
            : t.upperBound(w, !!v)
          : w === void 0
          ? t.lowerBound(h, !!p)
          : t.bound(h, w, !!p, !!v);
    return m;
  }
  function a(l) {
    var h = l.name;
    function w(m) {
      var E = m.trans,
        S = m.type,
        g = m.keys,
        _ = m.values,
        y = m.range;
      return new Promise(function (A, D) {
        A = Z(A);
        var T = E.objectStore(h),
          I = T.keyPath == null,
          k = S === 'put' || S === 'add';
        if (!k && S !== 'delete' && S !== 'deleteRange')
          throw new Error('Invalid operation type: ' + S);
        var M = (g || _ || { length: 1 }).length;
        if (g && _ && g.length !== _.length)
          throw new Error('Given keys array must have same length as given values array.');
        if (M === 0) return A({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
        var U,
          j = [],
          Q = [],
          P = 0,
          Y = function (pe) {
            ++P, Tt(pe);
          };
        if (S === 'deleteRange') {
          if (y.type === 4)
            return A({ numFailures: P, failures: Q, results: [], lastResult: void 0 });
          y.type === 3 ? j.push((U = T.clear())) : j.push((U = T.delete(i(y))));
        } else {
          var oe = k ? (I ? [_, g] : [_, null]) : [g, null],
            de = oe[0],
            re = oe[1];
          if (k)
            for (var ce = 0; ce < M; ++ce)
              j.push((U = re && re[ce] !== void 0 ? T[S](de[ce], re[ce]) : T[S](de[ce]))),
                (U.onerror = Y);
          else for (var ce = 0; ce < M; ++ce) j.push((U = T[S](de[ce]))), (U.onerror = Y);
        }
        var ye = function (pe) {
          var Ve = pe.target.result;
          j.forEach(function (le, tt) {
            return le.error != null && (Q[tt] = le.error);
          }),
            A({
              numFailures: P,
              failures: Q,
              results:
                S === 'delete'
                  ? g
                  : j.map(function (le) {
                      return le.result;
                    }),
              lastResult: Ve,
            });
        };
        (U.onerror = function (pe) {
          Y(pe), ye(pe);
        }),
          (U.onsuccess = ye);
      });
    }
    function p(m) {
      var E = m.trans,
        S = m.values,
        g = m.query,
        _ = m.reverse,
        y = m.unique;
      return new Promise(function (A, D) {
        A = Z(A);
        var T = g.index,
          I = g.range,
          k = E.objectStore(h),
          M = T.isPrimaryKey ? k : k.index(T.name),
          U = _ ? (y ? 'prevunique' : 'prev') : y ? 'nextunique' : 'next',
          j = S || !('openKeyCursor' in M) ? M.openCursor(i(I), U) : M.openKeyCursor(i(I), U);
        (j.onerror = be(D)),
          (j.onsuccess = Z(function (Q) {
            var P = j.result;
            if (!P) {
              A(null);
              return;
            }
            (P.___id = ++Da), (P.done = !1);
            var Y = P.continue.bind(P),
              oe = P.continuePrimaryKey;
            oe && (oe = oe.bind(P));
            var de = P.advance.bind(P),
              re = function () {
                throw new Error('Cursor not started');
              },
              ce = function () {
                throw new Error('Cursor not stopped');
              };
            (P.trans = E),
              (P.stop = P.continue = P.continuePrimaryKey = P.advance = re),
              (P.fail = Z(D)),
              (P.next = function () {
                var ye = this,
                  pe = 1;
                return this.start(function () {
                  return pe-- ? ye.continue() : ye.stop();
                }).then(function () {
                  return ye;
                });
              }),
              (P.start = function (ye) {
                var pe = new Promise(function (le, tt) {
                    (le = Z(le)),
                      (j.onerror = be(tt)),
                      (P.fail = tt),
                      (P.stop = function (un) {
                        (P.stop = P.continue = P.continuePrimaryKey = P.advance = ce), le(un);
                      });
                  }),
                  Ve = function () {
                    if (j.result)
                      try {
                        ye();
                      } catch (le) {
                        P.fail(le);
                      }
                    else
                      (P.done = !0),
                        (P.start = function () {
                          throw new Error('Cursor behind last entry');
                        }),
                        P.stop();
                  };
                return (
                  (j.onsuccess = Z(function (le) {
                    (j.onsuccess = Ve), Ve();
                  })),
                  (P.continue = Y),
                  (P.continuePrimaryKey = oe),
                  (P.advance = de),
                  Ve(),
                  pe
                );
              }),
              A(P);
          }, D));
      });
    }
    function v(m) {
      return function (E) {
        return new Promise(function (S, g) {
          S = Z(S);
          var _ = E.trans,
            y = E.values,
            A = E.limit,
            D = E.query,
            T = A === 1 / 0 ? void 0 : A,
            I = D.index,
            k = D.range,
            M = _.objectStore(h),
            U = I.isPrimaryKey ? M : M.index(I.name),
            j = i(k);
          if (A === 0) return S({ result: [] });
          if (m) {
            var Q = y ? U.getAll(j, T) : U.getAllKeys(j, T);
            (Q.onsuccess = function (de) {
              return S({ result: de.target.result });
            }),
              (Q.onerror = be(g));
          } else {
            var P = 0,
              Y = y || !('openKeyCursor' in U) ? U.openCursor(j) : U.openKeyCursor(j),
              oe = [];
            (Y.onsuccess = function (de) {
              var re = Y.result;
              if (!re) return S({ result: oe });
              if ((oe.push(y ? re.value : re.primaryKey), ++P === A)) return S({ result: oe });
              re.continue();
            }),
              (Y.onerror = be(g));
          }
        });
      };
    }
    return {
      name: h,
      schema: l,
      mutate: w,
      getMany: function (m) {
        var E = m.trans,
          S = m.keys;
        return new Promise(function (g, _) {
          g = Z(g);
          for (
            var y = E.objectStore(h),
              A = S.length,
              D = new Array(A),
              T = 0,
              I = 0,
              k,
              M = function (P) {
                var Y = P.target;
                (D[Y._pos] = Y.result) != null, ++I === T && g(D);
              },
              U = be(_),
              j = 0;
            j < A;
            ++j
          ) {
            var Q = S[j];
            Q != null && ((k = y.get(S[j])), (k._pos = j), (k.onsuccess = M), (k.onerror = U), ++T);
          }
          T === 0 && g(D);
        });
      },
      get: function (m) {
        var E = m.trans,
          S = m.key;
        return new Promise(function (g, _) {
          g = Z(g);
          var y = E.objectStore(h),
            A = y.get(S);
          (A.onsuccess = function (D) {
            return g(D.target.result);
          }),
            (A.onerror = be(_));
        });
      },
      query: v(s),
      openCursor: p,
      count: function (m) {
        var E = m.query,
          S = m.trans,
          g = E.index,
          _ = E.range;
        return new Promise(function (y, A) {
          var D = S.objectStore(h),
            T = g.isPrimaryKey ? D : D.index(g.name),
            I = i(_),
            k = I ? T.count(I) : T.count();
          (k.onsuccess = Z(function (M) {
            return y(M.target.result);
          })),
            (k.onerror = be(A));
        });
      },
    };
  }
  var o = r(e, n),
    u = o.schema,
    s = o.hasGetAll,
    c = u.tables.map(function (l) {
      return a(l);
    }),
    d = {};
  return (
    c.forEach(function (l) {
      return (d[l.name] = l);
    }),
    {
      stack: 'dbcore',
      transaction: e.transaction.bind(e),
      table: function (l) {
        var h = d[l];
        if (!h) throw new Error("Table '" + l + "' not found");
        return d[l];
      },
      MIN_KEY: -1 / 0,
      MAX_KEY: xt(t),
      schema: u,
    }
  );
}
function Ka(e, t) {
  return t.reduce(function (n, r) {
    var i = r.create;
    return H(H({}, n), i(n));
  }, e);
}
function Ma(e, t, n, r) {
  var i = n.IDBKeyRange;
  n.indexedDB;
  var a = Ka(Pa(t, i, r), e.dbcore);
  return { dbcore: a };
}
function ir(e, t) {
  var n = e._novip,
    r = t.db,
    i = Ma(n._middlewares, r, n._deps, t);
  (n.core = i.dbcore),
    n.tables.forEach(function (a) {
      var o = a.name;
      n.core.schema.tables.some(function (u) {
        return u.name === o;
      }) && ((a.core = n.core.table(o)), n[o] instanceof n.Table && (n[o].core = a.core));
    });
}
function Zt(e, t, n, r) {
  var i = e._novip;
  n.forEach(function (a) {
    var o = r[a];
    t.forEach(function (u) {
      var s = zn(u, a);
      (!s || ('value' in s && s.value === void 0)) &&
        (u === i.Transaction.prototype || u instanceof i.Transaction
          ? Ce(u, a, {
              get: function () {
                return this.table(a);
              },
              set: function (c) {
                Mr(this, a, { value: c, writable: !0, configurable: !0, enumerable: !0 });
              },
            })
          : (u[a] = new i.Table(a, o)));
    });
  });
}
function Nn(e, t) {
  var n = e._novip;
  t.forEach(function (r) {
    for (var i in r) r[i] instanceof n.Table && delete r[i];
  });
}
function Ba(e, t) {
  return e._cfg.version - t._cfg.version;
}
function Na(e, t, n, r) {
  var i = e._dbSchema,
    a = e._createTransaction('readwrite', e._storeNames, i);
  a.create(n), a._completion.catch(r);
  var o = a._reject.bind(a),
    u = K.transless || K;
  je(function () {
    (K.trans = a),
      (K.transless = u),
      t === 0
        ? (te(i).forEach(function (s) {
            ar(n, s, i[s].primKey, i[s].indexes);
          }),
          ir(e, n),
          R.follow(function () {
            return e.on.populate.fire(a);
          }).catch(o))
        : Fa(e, t, a, n).catch(o);
  });
}
function Fa(e, t, n, r) {
  var i = e._novip,
    a = [],
    o = i._versions,
    u = (i._dbSchema = or(i, i.idbdb, r)),
    s = !1,
    c = o.filter(function (l) {
      return l._cfg.version >= t;
    });
  c.forEach(function (l) {
    a.push(function () {
      var h = u,
        w = l._cfg.dbschema;
      jn(i, h, r), jn(i, w, r), (u = i._dbSchema = w);
      var p = si(h, w);
      p.add.forEach(function (_) {
        ar(r, _[0], _[1].primKey, _[1].indexes);
      }),
        p.change.forEach(function (_) {
          if (_.recreate) throw new N.Upgrade('Not yet support for changing primary key');
          var y = r.objectStore(_.name);
          _.add.forEach(function (A) {
            return Fn(y, A);
          }),
            _.change.forEach(function (A) {
              y.deleteIndex(A.name), Fn(y, A);
            }),
            _.del.forEach(function (A) {
              return y.deleteIndex(A);
            });
        });
      var v = l._cfg.contentUpgrade;
      if (v && l._cfg.version > t) {
        ir(i, r), (n._memoizedTables = {}), (s = !0);
        var m = jr(w);
        p.del.forEach(function (_) {
          m[_] = h[_];
        }),
          Nn(i, [i.Transaction.prototype]),
          Zt(i, [i.Transaction.prototype], te(m), m),
          (n.schema = m);
        var E = Xn(v);
        E && ct();
        var S,
          g = R.follow(function () {
            if (((S = v(n)), S && E)) {
              var _ = De.bind(null, null);
              S.then(_, _);
            }
          });
        return S && typeof S.then == 'function'
          ? R.resolve(S)
          : g.then(function () {
              return S;
            });
      }
    }),
      a.push(function (h) {
        if (!s || !ha) {
          var w = l._cfg.dbschema;
          Ua(w, h);
        }
        Nn(i, [i.Transaction.prototype]),
          Zt(i, [i.Transaction.prototype], i._storeNames, i._dbSchema),
          (n.schema = i._dbSchema);
      });
  });
  function d() {
    return a.length ? R.resolve(a.shift()(n.idbtrans)).then(d) : R.resolve();
  }
  return d().then(function () {
    ja(u, r);
  });
}
function si(e, t) {
  var n = { del: [], add: [], change: [] },
    r;
  for (r in e) t[r] || n.del.push(r);
  for (r in t) {
    var i = e[r],
      a = t[r];
    if (!i) n.add.push([r, a]);
    else {
      var o = { name: r, def: a, recreate: !1, del: [], add: [], change: [] };
      if (
        '' + (i.primKey.keyPath || '') != '' + (a.primKey.keyPath || '') ||
        (i.primKey.auto !== a.primKey.auto && !an)
      )
        (o.recreate = !0), n.change.push(o);
      else {
        var u = i.idxByName,
          s = a.idxByName,
          c = void 0;
        for (c in u) s[c] || o.del.push(c);
        for (c in s) {
          var d = u[c],
            l = s[c];
          d ? d.src !== l.src && o.change.push(l) : o.add.push(l);
        }
        (o.del.length > 0 || o.add.length > 0 || o.change.length > 0) && n.change.push(o);
      }
    }
  }
  return n;
}
function ar(e, t, n, r) {
  var i = e.db.createObjectStore(
    t,
    n.keyPath ? { keyPath: n.keyPath, autoIncrement: n.auto } : { autoIncrement: n.auto }
  );
  return (
    r.forEach(function (a) {
      return Fn(i, a);
    }),
    i
  );
}
function ja(e, t) {
  te(e).forEach(function (n) {
    t.db.objectStoreNames.contains(n) || ar(t, n, e[n].primKey, e[n].indexes);
  });
}
function Ua(e, t) {
  [].slice.call(t.db.objectStoreNames).forEach(function (n) {
    return e[n] == null && t.db.deleteObjectStore(n);
  });
}
function Fn(e, t) {
  e.createIndex(t.name, t.keyPath, { unique: t.unique, multiEntry: t.multi });
}
function or(e, t, n) {
  var r = {},
    i = nn(t.objectStoreNames, 0);
  return (
    i.forEach(function (a) {
      for (
        var o = n.objectStore(a),
          u = o.keyPath,
          s = Mn(oi(u), u || '', !1, !1, !!o.autoIncrement, u && typeof u != 'string', !0),
          c = [],
          d = 0;
        d < o.indexNames.length;
        ++d
      ) {
        var l = o.index(o.indexNames[d]);
        u = l.keyPath;
        var h = Mn(l.name, u, !!l.unique, !!l.multiEntry, !1, u && typeof u != 'string', !1);
        c.push(h);
      }
      r[a] = ui(a, s, c);
    }),
    r
  );
}
function La(e, t, n) {
  var r = e._novip;
  r.verno = t.version / 10;
  var i = (r._dbSchema = or(r, t, n));
  (r._storeNames = nn(t.objectStoreNames, 0)), Zt(r, [r._allTables], te(i), i);
}
function Va(e, t) {
  var n = or(e, e.idbdb, t),
    r = si(n, e._dbSchema);
  return !(
    r.add.length ||
    r.change.some(function (i) {
      return i.add.length || i.change.length;
    })
  );
}
function jn(e, t, n) {
  for (var r = e._novip, i = n.db.objectStoreNames, a = 0; a < i.length; ++a) {
    var o = i[a],
      u = n.objectStore(o);
    r._hasGetAll = 'getAll' in u;
    for (var s = 0; s < u.indexNames.length; ++s) {
      var c = u.indexNames[s],
        d = u.index(c).keyPath,
        l = typeof d == 'string' ? d : '[' + nn(d).join('+') + ']';
      if (t[o]) {
        var h = t[o].idxByName[l];
        h && ((h.name = c), delete t[o].idxByName[l], (t[o].idxByName[c] = h));
      }
    }
  }
  typeof navigator < 'u' &&
    /Safari/.test(navigator.userAgent) &&
    !/(Chrome\/|Edge\/)/.test(navigator.userAgent) &&
    J.WorkerGlobalScope &&
    J instanceof J.WorkerGlobalScope &&
    [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 &&
    (r._hasGetAll = !1);
}
function Wa(e) {
  return e.split(',').map(function (t, n) {
    t = t.trim();
    var r = t.replace(/([&*]|\+\+)/g, ''),
      i = /^\[/.test(r) ? r.match(/^\[(.*)\]$/)[1].split('+') : r;
    return Mn(r, i || null, /\&/.test(t), /\*/.test(t), /\+\+/.test(t), ae(i), n === 0);
  });
}
var Ha = (function () {
  function e() {}
  return (
    (e.prototype._parseStoresSpec = function (t, n) {
      te(t).forEach(function (r) {
        if (t[r] !== null) {
          var i = Wa(t[r]),
            a = i.shift();
          if (a.multi) throw new N.Schema('Primary key cannot be multi-valued');
          i.forEach(function (o) {
            if (o.auto) throw new N.Schema('Only primary key can be marked as autoIncrement (++)');
            if (!o.keyPath)
              throw new N.Schema('Index must have a name and cannot be an empty string');
          }),
            (n[r] = ui(r, a, i));
        }
      });
    }),
    (e.prototype.stores = function (t) {
      var n = this.db;
      this._cfg.storesSource = this._cfg.storesSource ? se(this._cfg.storesSource, t) : t;
      var r = n._versions,
        i = {},
        a = {};
      return (
        r.forEach(function (o) {
          se(i, o._cfg.storesSource), (a = o._cfg.dbschema = {}), o._parseStoresSpec(i, a);
        }),
        (n._dbSchema = a),
        Nn(n, [n._allTables, n, n.Transaction.prototype]),
        Zt(n, [n._allTables, n, n.Transaction.prototype, this._cfg.tables], te(a), a),
        (n._storeNames = te(a)),
        this
      );
    }),
    (e.prototype.upgrade = function (t) {
      return (this._cfg.contentUpgrade = Zn(this._cfg.contentUpgrade || q, t)), this;
    }),
    e
  );
})();
function $a(e) {
  return Kt(Ha.prototype, function (n) {
    (this.db = e),
      (this._cfg = {
        version: n,
        storesSource: null,
        dbschema: {},
        tables: {},
        contentUpgrade: null,
      });
  });
}
function ur(e, t) {
  var n = e._dbNamesDB;
  return (
    n ||
      ((n = e._dbNamesDB = new V(on, { addons: [], indexedDB: e, IDBKeyRange: t })),
      n.version(1).stores({ dbnames: 'name' })),
    n.table('dbnames')
  );
}
function sr(e) {
  return e && typeof e.databases == 'function';
}
function Ya(e) {
  var t = e.indexedDB,
    n = e.IDBKeyRange;
  return sr(t)
    ? Promise.resolve(t.databases()).then(function (r) {
        return r
          .map(function (i) {
            return i.name;
          })
          .filter(function (i) {
            return i !== on;
          });
      })
    : ur(t, n).toCollection().primaryKeys();
}
function qa(e, t) {
  var n = e.indexedDB,
    r = e.IDBKeyRange;
  !sr(n) && t !== on && ur(n, r).put({ name: t }).catch(q);
}
function Ga(e, t) {
  var n = e.indexedDB,
    r = e.IDBKeyRange;
  !sr(n) && t !== on && ur(n, r).delete(t).catch(q);
}
function Un(e) {
  return je(function () {
    return (K.letThrough = !0), e();
  });
}
function za() {
  var e =
    !navigator.userAgentData &&
    /Safari\//.test(navigator.userAgent) &&
    !/Chrom(e|ium)\//.test(navigator.userAgent);
  if (!e || !indexedDB.databases) return Promise.resolve();
  var t;
  return new Promise(function (n) {
    var r = function () {
      return indexedDB.databases().finally(n);
    };
    (t = setInterval(r, 100)), r();
  }).finally(function () {
    return clearInterval(t);
  });
}
function Xa(e) {
  var t = e._state,
    n = e._deps.indexedDB;
  if (t.isBeingOpened || e.idbdb)
    return t.dbReadyPromise.then(function () {
      return t.dbOpenError ? ne(t.dbOpenError) : e;
    });
  Ee && (t.openCanceller._stackHolder = et()),
    (t.isBeingOpened = !0),
    (t.dbOpenError = null),
    (t.openComplete = !1);
  var r = t.openCanceller;
  function i() {
    if (t.openCanceller !== r) throw new N.DatabaseClosed('db.open() was cancelled');
  }
  var a = t.dbReadyResolve,
    o = null,
    u = !1;
  return R.race([
    r,
    (typeof navigator > 'u' ? R.resolve() : za()).then(function () {
      return new R(function (s, c) {
        if ((i(), !n)) throw new N.MissingAPI();
        var d = e.name,
          l = t.autoSchema ? n.open(d) : n.open(d, Math.round(e.verno * 10));
        if (!l) throw new N.MissingAPI();
        (l.onerror = be(c)),
          (l.onblocked = Z(e._fireOnBlocked)),
          (l.onupgradeneeded = Z(function (h) {
            if (((o = l.transaction), t.autoSchema && !e._options.allowEmptyDB)) {
              (l.onerror = Tt), o.abort(), l.result.close();
              var w = n.deleteDatabase(d);
              w.onsuccess = w.onerror = Z(function () {
                c(new N.NoSuchDatabase('Database ' + d + ' doesnt exist'));
              });
            } else {
              o.onerror = be(c);
              var p = h.oldVersion > Math.pow(2, 62) ? 0 : h.oldVersion;
              (u = p < 1), (e._novip.idbdb = l.result), Na(e, p / 10, o, c);
            }
          }, c)),
          (l.onsuccess = Z(function () {
            o = null;
            var h = (e._novip.idbdb = l.result),
              w = nn(h.objectStoreNames);
            if (w.length > 0)
              try {
                var p = h.transaction(Ra(w), 'readonly');
                t.autoSchema
                  ? La(e, h, p)
                  : (jn(e, e._dbSchema, p),
                    Va(e, p) ||
                      console.warn(
                        'Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Some queries may fail.'
                      )),
                  ir(e, p);
              } catch {}
            _t.push(e),
              (h.onversionchange = Z(function (v) {
                (t.vcFired = !0), e.on('versionchange').fire(v);
              })),
              (h.onclose = Z(function (v) {
                e.on('close').fire(v);
              })),
              u && qa(e._deps, d),
              s();
          }, c));
      });
    }),
  ])
    .then(function () {
      return (
        i(),
        (t.onReadyBeingFired = []),
        R.resolve(
          Un(function () {
            return e.on.ready.fire(e.vip);
          })
        ).then(function s() {
          if (t.onReadyBeingFired.length > 0) {
            var c = t.onReadyBeingFired.reduce(Zn, q);
            return (
              (t.onReadyBeingFired = []),
              R.resolve(
                Un(function () {
                  return c(e.vip);
                })
              ).then(s)
            );
          }
        })
      );
    })
    .finally(function () {
      (t.onReadyBeingFired = null), (t.isBeingOpened = !1);
    })
    .then(function () {
      return e;
    })
    .catch(function (s) {
      t.dbOpenError = s;
      try {
        o && o.abort();
      } catch {}
      return r === t.openCanceller && e._close(), ne(s);
    })
    .finally(function () {
      (t.openComplete = !0), a();
    });
}
function Ln(e) {
  var t = function (o) {
      return e.next(o);
    },
    n = function (o) {
      return e.throw(o);
    },
    r = a(t),
    i = a(n);
  function a(o) {
    return function (u) {
      var s = o(u),
        c = s.value;
      return s.done
        ? c
        : !c || typeof c.then != 'function'
        ? ae(c)
          ? Promise.all(c).then(r, i)
          : r(c)
        : c.then(r, i);
    };
  }
  return a(t)();
}
function Ja(e, t, n) {
  var r = arguments.length;
  if (r < 2) throw new N.InvalidArgument('Too few arguments');
  for (var i = new Array(r - 1); --r; ) i[r - 1] = arguments[r];
  n = i.pop();
  var a = Ur(i);
  return [e, a, n];
}
function ci(e, t, n, r, i) {
  return R.resolve().then(function () {
    var a = K.transless || K,
      o = e._createTransaction(t, n, e._dbSchema, r),
      u = { trans: o, transless: a };
    if (r) o.idbtrans = r.idbtrans;
    else
      try {
        o.create(), (e._state.PR1398_maxLoop = 3);
      } catch (l) {
        return l.name === Qn.InvalidState && e.isOpen() && --e._state.PR1398_maxLoop > 0
          ? (console.warn('Dexie: Need to reopen db'),
            e._close(),
            e.open().then(function () {
              return ci(e, t, n, null, i);
            }))
          : ne(l);
      }
    var s = Xn(i);
    s && ct();
    var c,
      d = R.follow(function () {
        if (((c = i.call(o, o)), c))
          if (s) {
            var l = De.bind(null, null);
            c.then(l, l);
          } else typeof c.next == 'function' && typeof c.throw == 'function' && (c = Ln(c));
      }, u);
    return (
      c && typeof c.then == 'function'
        ? R.resolve(c).then(function (l) {
            return o.active
              ? l
              : ne(
                  new N.PrematureCommit(
                    'Transaction committed too early. See http://bit.ly/2kdckMn'
                  )
                );
          })
        : d.then(function () {
            return c;
          })
    )
      .then(function (l) {
        return (
          r && o._resolve(),
          o._completion.then(function () {
            return l;
          })
        );
      })
      .catch(function (l) {
        return o._reject(l), ne(l);
      });
  });
}
function Ut(e, t, n) {
  for (var r = ae(e) ? e.slice() : [e], i = 0; i < n; ++i) r.push(t);
  return r;
}
function Qa(e) {
  return H(H({}, e), {
    table: function (t) {
      var n = e.table(t),
        r = n.schema,
        i = {},
        a = [];
      function o(v, m, E) {
        var S = bt(v),
          g = (i[S] = i[S] || []),
          _ = v == null ? 0 : typeof v == 'string' ? 1 : v.length,
          y = m > 0,
          A = H(H({}, E), {
            isVirtual: y,
            keyTail: m,
            keyLength: _,
            extractKey: Bn(v),
            unique: !y && E.unique,
          });
        if ((g.push(A), A.isPrimaryKey || a.push(A), _ > 1)) {
          var D = _ === 2 ? v[0] : v.slice(0, _ - 1);
          o(D, m + 1, E);
        }
        return (
          g.sort(function (T, I) {
            return T.keyTail - I.keyTail;
          }),
          A
        );
      }
      var u = o(r.primaryKey.keyPath, 0, r.primaryKey);
      i[':id'] = [u];
      for (var s = 0, c = r.indexes; s < c.length; s++) {
        var d = c[s];
        o(d.keyPath, 0, d);
      }
      function l(v) {
        var m = i[bt(v)];
        return m && m[0];
      }
      function h(v, m) {
        return {
          type: v.type === 1 ? 2 : v.type,
          lower: Ut(v.lower, v.lowerOpen ? e.MAX_KEY : e.MIN_KEY, m),
          lowerOpen: !0,
          upper: Ut(v.upper, v.upperOpen ? e.MIN_KEY : e.MAX_KEY, m),
          upperOpen: !0,
        };
      }
      function w(v) {
        var m = v.query.index;
        return m.isVirtual
          ? H(H({}, v), { query: { index: m, range: h(v.query.range, m.keyTail) } })
          : v;
      }
      var p = H(H({}, n), {
        schema: H(H({}, r), { primaryKey: u, indexes: a, getIndexByKeyPath: l }),
        count: function (v) {
          return n.count(w(v));
        },
        query: function (v) {
          return n.query(w(v));
        },
        openCursor: function (v) {
          var m = v.query.index,
            E = m.keyTail,
            S = m.isVirtual,
            g = m.keyLength;
          if (!S) return n.openCursor(v);
          function _(y) {
            function A(T) {
              T != null
                ? y.continue(Ut(T, v.reverse ? e.MAX_KEY : e.MIN_KEY, E))
                : v.unique
                ? y.continue(y.key.slice(0, g).concat(v.reverse ? e.MIN_KEY : e.MAX_KEY, E))
                : y.continue();
            }
            var D = Object.create(y, {
              continue: { value: A },
              continuePrimaryKey: {
                value: function (T, I) {
                  y.continuePrimaryKey(Ut(T, e.MAX_KEY, E), I);
                },
              },
              primaryKey: {
                get: function () {
                  return y.primaryKey;
                },
              },
              key: {
                get: function () {
                  var T = y.key;
                  return g === 1 ? T[0] : T.slice(0, g);
                },
              },
              value: {
                get: function () {
                  return y.value;
                },
              },
            });
            return D;
          }
          return n.openCursor(w(v)).then(function (y) {
            return y && _(y);
          });
        },
      });
      return p;
    },
  });
}
var Za = { stack: 'dbcore', name: 'VirtualIndexMiddleware', level: 1, create: Qa };
function cr(e, t, n, r) {
  return (
    (n = n || {}),
    (r = r || ''),
    te(e).forEach(function (i) {
      if (!ve(t, i)) n[r + i] = void 0;
      else {
        var a = e[i],
          o = t[i];
        if (typeof a == 'object' && typeof o == 'object' && a && o) {
          var u = En(a),
            s = En(o);
          u !== s
            ? (n[r + i] = t[i])
            : u === 'Object'
            ? cr(a, o, n, r + i + '.')
            : a !== o && (n[r + i] = t[i]);
        } else a !== o && (n[r + i] = t[i]);
      }
    }),
    te(t).forEach(function (i) {
      ve(e, i) || (n[r + i] = t[i]);
    }),
    n
  );
}
function eo(e, t) {
  return t.type === 'delete' ? t.keys : t.keys || t.values.map(e.extractKey);
}
var to = {
  stack: 'dbcore',
  name: 'HooksMiddleware',
  level: 2,
  create: function (e) {
    return H(H({}, e), {
      table: function (t) {
        var n = e.table(t),
          r = n.schema.primaryKey,
          i = H(H({}, n), {
            mutate: function (a) {
              var o = K.trans,
                u = o.table(t).hook,
                s = u.deleting,
                c = u.creating,
                d = u.updating;
              switch (a.type) {
                case 'add':
                  if (c.fire === q) break;
                  return o._promise(
                    'readwrite',
                    function () {
                      return l(a);
                    },
                    !0
                  );
                case 'put':
                  if (c.fire === q && d.fire === q) break;
                  return o._promise(
                    'readwrite',
                    function () {
                      return l(a);
                    },
                    !0
                  );
                case 'delete':
                  if (s.fire === q) break;
                  return o._promise(
                    'readwrite',
                    function () {
                      return l(a);
                    },
                    !0
                  );
                case 'deleteRange':
                  if (s.fire === q) break;
                  return o._promise(
                    'readwrite',
                    function () {
                      return h(a);
                    },
                    !0
                  );
              }
              return n.mutate(a);
              function l(p) {
                var v = K.trans,
                  m = p.keys || eo(r, p);
                if (!m) throw new Error('Keys missing');
                return (
                  (p = p.type === 'add' || p.type === 'put' ? H(H({}, p), { keys: m }) : H({}, p)),
                  p.type !== 'delete' && (p.values = _n([], p.values, !0)),
                  p.keys && (p.keys = _n([], p.keys, !0)),
                  no(n, p, m).then(function (E) {
                    var S = m.map(function (g, _) {
                      var y = E[_],
                        A = { onerror: null, onsuccess: null };
                      if (p.type === 'delete') s.fire.call(A, g, y, v);
                      else if (p.type === 'add' || y === void 0) {
                        var D = c.fire.call(A, g, p.values[_], v);
                        g == null &&
                          D != null &&
                          ((g = D), (p.keys[_] = g), r.outbound || ge(p.values[_], r.keyPath, g));
                      } else {
                        var T = cr(y, p.values[_]),
                          I = d.fire.call(A, T, g, y, v);
                        if (I) {
                          var k = p.values[_];
                          Object.keys(I).forEach(function (M) {
                            ve(k, M) ? (k[M] = I[M]) : ge(k, M, I[M]);
                          });
                        }
                      }
                      return A;
                    });
                    return n
                      .mutate(p)
                      .then(function (g) {
                        for (
                          var _ = g.failures,
                            y = g.results,
                            A = g.numFailures,
                            D = g.lastResult,
                            T = 0;
                          T < m.length;
                          ++T
                        ) {
                          var I = y ? y[T] : m[T],
                            k = S[T];
                          I == null
                            ? k.onerror && k.onerror(_[T])
                            : k.onsuccess &&
                              k.onsuccess(p.type === 'put' && E[T] ? p.values[T] : I);
                        }
                        return { failures: _, results: y, numFailures: A, lastResult: D };
                      })
                      .catch(function (g) {
                        return (
                          S.forEach(function (_) {
                            return _.onerror && _.onerror(g);
                          }),
                          Promise.reject(g)
                        );
                      });
                  })
                );
              }
              function h(p) {
                return w(p.trans, p.range, 1e4);
              }
              function w(p, v, m) {
                return n
                  .query({ trans: p, values: !1, query: { index: r, range: v }, limit: m })
                  .then(function (E) {
                    var S = E.result;
                    return l({ type: 'delete', keys: S, trans: p }).then(function (g) {
                      return g.numFailures > 0
                        ? Promise.reject(g.failures[0])
                        : S.length < m
                        ? { failures: [], numFailures: 0, lastResult: void 0 }
                        : w(p, H(H({}, v), { lower: S[S.length - 1], lowerOpen: !0 }), m);
                    });
                  });
              }
            },
          });
        return i;
      },
    });
  },
};
function no(e, t, n) {
  return t.type === 'add'
    ? Promise.resolve([])
    : e.getMany({ trans: t.trans, keys: n, cache: 'immutable' });
}
function li(e, t, n) {
  try {
    if (!t || t.keys.length < e.length) return null;
    for (var r = [], i = 0, a = 0; i < t.keys.length && a < e.length; ++i)
      ue(t.keys[i], e[a]) === 0 && (r.push(n ? Ot(t.values[i]) : t.values[i]), ++a);
    return r.length === e.length ? r : null;
  } catch {
    return null;
  }
}
var ro = {
    stack: 'dbcore',
    level: -1,
    create: function (e) {
      return {
        table: function (t) {
          var n = e.table(t);
          return H(H({}, n), {
            getMany: function (r) {
              if (!r.cache) return n.getMany(r);
              var i = li(r.keys, r.trans._cache, r.cache === 'clone');
              return i
                ? R.resolve(i)
                : n.getMany(r).then(function (a) {
                    return (
                      (r.trans._cache = { keys: r.keys, values: r.cache === 'clone' ? Ot(a) : a }),
                      a
                    );
                  });
            },
            mutate: function (r) {
              return r.type !== 'add' && (r.trans._cache = null), n.mutate(r);
            },
          });
        },
      };
    },
  },
  yn;
function lr(e) {
  return !('from' in e);
}
var Ie = function (e, t) {
  if (this)
    se(this, arguments.length ? { d: 1, from: e, to: arguments.length > 1 ? t : e } : { d: 0 });
  else {
    var n = new Ie();
    return e && 'd' in e && se(n, e), n;
  }
};
ot(
  Ie.prototype,
  ((yn = {
    add: function (e) {
      return en(this, e), this;
    },
    addKey: function (e) {
      return kt(this, e, e), this;
    },
    addKeys: function (e) {
      var t = this;
      return (
        e.forEach(function (n) {
          return kt(t, n, n);
        }),
        this
      );
    },
  }),
  (yn[Sn] = function () {
    return Vn(this);
  }),
  yn)
);
function kt(e, t, n) {
  var r = ue(t, n);
  if (!isNaN(r)) {
    if (r > 0) throw RangeError();
    if (lr(e)) return se(e, { from: t, to: n, d: 1 });
    var i = e.l,
      a = e.r;
    if (ue(n, e.from) < 0)
      return i ? kt(i, t, n) : (e.l = { from: t, to: n, d: 1, l: null, r: null }), Ir(e);
    if (ue(t, e.to) > 0)
      return a ? kt(a, t, n) : (e.r = { from: t, to: n, d: 1, l: null, r: null }), Ir(e);
    ue(t, e.from) < 0 && ((e.from = t), (e.l = null), (e.d = a ? a.d + 1 : 1)),
      ue(n, e.to) > 0 && ((e.to = n), (e.r = null), (e.d = e.l ? e.l.d + 1 : 1));
    var o = !e.r;
    i && !e.l && en(e, i), a && o && en(e, a);
  }
}
function en(e, t) {
  function n(r, i) {
    var a = i.from,
      o = i.to,
      u = i.l,
      s = i.r;
    kt(r, a, o), u && n(r, u), s && n(r, s);
  }
  lr(t) || n(e, t);
}
function io(e, t) {
  var n = Vn(t),
    r = n.next();
  if (r.done) return !1;
  for (var i = r.value, a = Vn(e), o = a.next(i.from), u = o.value; !r.done && !o.done; ) {
    if (ue(u.from, i.to) <= 0 && ue(u.to, i.from) >= 0) return !0;
    ue(i.from, u.from) < 0 ? (i = (r = n.next(u.from)).value) : (u = (o = a.next(i.from)).value);
  }
  return !1;
}
function Vn(e) {
  var t = lr(e) ? null : { s: 0, n: e };
  return {
    next: function (n) {
      for (var r = arguments.length > 0; t; )
        switch (t.s) {
          case 0:
            if (((t.s = 1), r))
              for (; t.n.l && ue(n, t.n.from) < 0; ) t = { up: t, n: t.n.l, s: 1 };
            else for (; t.n.l; ) t = { up: t, n: t.n.l, s: 1 };
          case 1:
            if (((t.s = 2), !r || ue(n, t.n.to) <= 0)) return { value: t.n, done: !1 };
          case 2:
            if (t.n.r) {
              (t.s = 3), (t = { up: t, n: t.n.r, s: 0 });
              continue;
            }
          case 3:
            t = t.up;
        }
      return { done: !0 };
    },
  };
}
function Ir(e) {
  var t,
    n,
    r =
      (((t = e.r) === null || t === void 0 ? void 0 : t.d) || 0) -
      (((n = e.l) === null || n === void 0 ? void 0 : n.d) || 0),
    i = r > 1 ? 'r' : r < -1 ? 'l' : '';
  if (i) {
    var a = i === 'r' ? 'l' : 'r',
      o = H({}, e),
      u = e[i];
    (e.from = u.from), (e.to = u.to), (e[i] = u[i]), (o[i] = u[a]), (e[a] = o), (o.d = xr(o));
  }
  e.d = xr(e);
}
function xr(e) {
  var t = e.r,
    n = e.l;
  return (t ? (n ? Math.max(t.d, n.d) : t.d) : n ? n.d : 0) + 1;
}
var ao = {
  stack: 'dbcore',
  level: 0,
  create: function (e) {
    var t = e.schema.name,
      n = new Ie(e.MIN_KEY, e.MAX_KEY);
    return H(H({}, e), {
      table: function (r) {
        var i = e.table(r),
          a = i.schema,
          o = a.primaryKey,
          u = o.extractKey,
          s = o.outbound,
          c = H(H({}, i), {
            mutate: function (h) {
              var w = h.trans,
                p = w.mutatedParts || (w.mutatedParts = {}),
                v = function (D) {
                  var T = 'idb://' + t + '/' + r + '/' + D;
                  return p[T] || (p[T] = new Ie());
                },
                m = v(''),
                E = v(':dels'),
                S = h.type,
                g =
                  h.type === 'deleteRange'
                    ? [h.range]
                    : h.type === 'delete'
                    ? [h.keys]
                    : h.values.length < 50
                    ? [[], h.values]
                    : [],
                _ = g[0],
                y = g[1],
                A = h.trans._cache;
              return i.mutate(h).then(function (D) {
                if (ae(_)) {
                  S !== 'delete' && (_ = D.results), m.addKeys(_);
                  var T = li(_, A);
                  !T && S !== 'add' && E.addKeys(_), (T || y) && oo(v, a, T, y);
                } else if (_) {
                  var I = { from: _.lower, to: _.upper };
                  E.add(I), m.add(I);
                } else
                  m.add(n),
                    E.add(n),
                    a.indexes.forEach(function (k) {
                      return v(k.name).add(n);
                    });
                return D;
              });
            },
          }),
          d = function (h) {
            var w,
              p,
              v = h.query,
              m = v.index,
              E = v.range;
            return [
              m,
              new Ie(
                (w = E.lower) !== null && w !== void 0 ? w : e.MIN_KEY,
                (p = E.upper) !== null && p !== void 0 ? p : e.MAX_KEY
              ),
            ];
          },
          l = {
            get: function (h) {
              return [o, new Ie(h.key)];
            },
            getMany: function (h) {
              return [o, new Ie().addKeys(h.keys)];
            },
            count: d,
            query: d,
            openCursor: d,
          };
        return (
          te(l).forEach(function (h) {
            c[h] = function (w) {
              var p = K.subscr;
              if (p) {
                var v = function (A) {
                    var D = 'idb://' + t + '/' + r + '/' + A;
                    return p[D] || (p[D] = new Ie());
                  },
                  m = v(''),
                  E = v(':dels'),
                  S = l[h](w),
                  g = S[0],
                  _ = S[1];
                if ((v(g.name || '').add(_), !g.isPrimaryKey))
                  if (h === 'count') E.add(n);
                  else {
                    var y = h === 'query' && s && w.values && i.query(H(H({}, w), { values: !1 }));
                    return i[h].apply(this, arguments).then(function (A) {
                      if (h === 'query') {
                        if (s && w.values)
                          return y.then(function (k) {
                            var M = k.result;
                            return m.addKeys(M), A;
                          });
                        var D = w.values ? A.result.map(u) : A.result;
                        w.values ? m.addKeys(D) : E.addKeys(D);
                      } else if (h === 'openCursor') {
                        var T = A,
                          I = w.values;
                        return (
                          T &&
                          Object.create(T, {
                            key: {
                              get: function () {
                                return E.addKey(T.primaryKey), T.key;
                              },
                            },
                            primaryKey: {
                              get: function () {
                                var k = T.primaryKey;
                                return E.addKey(k), k;
                              },
                            },
                            value: {
                              get: function () {
                                return I && m.addKey(T.primaryKey), T.value;
                              },
                            },
                          })
                        );
                      }
                      return A;
                    });
                  }
              }
              return i[h].apply(this, arguments);
            };
          }),
          c
        );
      },
    });
  },
};
function oo(e, t, n, r) {
  function i(a) {
    var o = e(a.name || '');
    function u(c) {
      return c != null ? a.extractKey(c) : null;
    }
    var s = function (c) {
      return a.multiEntry && ae(c)
        ? c.forEach(function (d) {
            return o.addKey(d);
          })
        : o.addKey(c);
    };
    (n || r).forEach(function (c, d) {
      var l = n && u(n[d]),
        h = r && u(r[d]);
      ue(l, h) !== 0 && (l != null && s(l), h != null && s(h));
    });
  }
  t.indexes.forEach(i);
}
var V = (function () {
    function e(t, n) {
      var r = this;
      (this._middlewares = {}), (this.verno = 0);
      var i = e.dependencies;
      (this._options = n =
        H(
          { addons: e.addons, autoOpen: !0, indexedDB: i.indexedDB, IDBKeyRange: i.IDBKeyRange },
          n
        )),
        (this._deps = { indexedDB: n.indexedDB, IDBKeyRange: n.IDBKeyRange });
      var a = n.addons;
      (this._dbSchema = {}),
        (this._versions = []),
        (this._storeNames = []),
        (this._allTables = {}),
        (this.idbdb = null),
        (this._novip = this);
      var o = {
        dbOpenError: null,
        isBeingOpened: !1,
        onReadyBeingFired: null,
        openComplete: !1,
        dbReadyResolve: q,
        dbReadyPromise: null,
        cancelOpen: q,
        openCanceller: null,
        autoSchema: !0,
        PR1398_maxLoop: 3,
      };
      (o.dbReadyPromise = new R(function (u) {
        o.dbReadyResolve = u;
      })),
        (o.openCanceller = new R(function (u, s) {
          o.cancelOpen = s;
        })),
        (this._state = o),
        (this.name = t),
        (this.on = Pt(this, 'populate', 'blocked', 'versionchange', 'close', { ready: [Zn, q] })),
        (this.on.ready.subscribe = Br(this.on.ready.subscribe, function (u) {
          return function (s, c) {
            e.vip(function () {
              var d = r._state;
              if (d.openComplete) d.dbOpenError || R.resolve().then(s), c && u(s);
              else if (d.onReadyBeingFired) d.onReadyBeingFired.push(s), c && u(s);
              else {
                u(s);
                var l = r;
                c ||
                  u(function h() {
                    l.on.ready.unsubscribe(s), l.on.ready.unsubscribe(h);
                  });
              }
            });
          };
        })),
        (this.Collection = ba(this)),
        (this.Table = ya(this)),
        (this.Transaction = Oa(this)),
        (this.Version = $a(this)),
        (this.WhereClause = xa(this)),
        this.on('versionchange', function (u) {
          u.newVersion > 0
            ? console.warn(
                "Another connection wants to upgrade database '" +
                  r.name +
                  "'. Closing db now to resume the upgrade."
              )
            : console.warn(
                "Another connection wants to delete database '" +
                  r.name +
                  "'. Closing db now to resume the delete request."
              ),
            r.close();
        }),
        this.on('blocked', function (u) {
          !u.newVersion || u.newVersion < u.oldVersion
            ? console.warn("Dexie.delete('" + r.name + "') was blocked")
            : console.warn(
                "Upgrade '" +
                  r.name +
                  "' blocked by other connection holding version " +
                  u.oldVersion / 10
              );
        }),
        (this._maxKey = xt(n.IDBKeyRange)),
        (this._createTransaction = function (u, s, c, d) {
          return new r.Transaction(u, s, c, r._options.chromeTransactionDurability, d);
        }),
        (this._fireOnBlocked = function (u) {
          r.on('blocked').fire(u),
            _t
              .filter(function (s) {
                return s.name === r.name && s !== r && !s._state.vcFired;
              })
              .map(function (s) {
                return s.on('versionchange').fire(u);
              });
        }),
        this.use(Za),
        this.use(to),
        this.use(ao),
        this.use(ro),
        (this.vip = Object.create(this, { _vip: { value: !0 } })),
        a.forEach(function (u) {
          return u(r);
        });
    }
    return (
      (e.prototype.version = function (t) {
        if (isNaN(t) || t < 0.1) throw new N.Type('Given version is not a positive number');
        if (((t = Math.round(t * 10) / 10), this.idbdb || this._state.isBeingOpened))
          throw new N.Schema('Cannot add version when database is open');
        this.verno = Math.max(this.verno, t);
        var n = this._versions,
          r = n.filter(function (i) {
            return i._cfg.version === t;
          })[0];
        return (
          r ||
          ((r = new this.Version(t)),
          n.push(r),
          n.sort(Ba),
          r.stores({}),
          (this._state.autoSchema = !1),
          r)
        );
      }),
      (e.prototype._whenReady = function (t) {
        var n = this;
        return this.idbdb && (this._state.openComplete || K.letThrough || this._vip)
          ? t()
          : new R(function (r, i) {
              if (n._state.openComplete) return i(new N.DatabaseClosed(n._state.dbOpenError));
              if (!n._state.isBeingOpened) {
                if (!n._options.autoOpen) {
                  i(new N.DatabaseClosed());
                  return;
                }
                n.open().catch(q);
              }
              n._state.dbReadyPromise.then(r, i);
            }).then(t);
      }),
      (e.prototype.use = function (t) {
        var n = t.stack,
          r = t.create,
          i = t.level,
          a = t.name;
        a && this.unuse({ stack: n, name: a });
        var o = this._middlewares[n] || (this._middlewares[n] = []);
        return (
          o.push({ stack: n, create: r, level: i ?? 10, name: a }),
          o.sort(function (u, s) {
            return u.level - s.level;
          }),
          this
        );
      }),
      (e.prototype.unuse = function (t) {
        var n = t.stack,
          r = t.name,
          i = t.create;
        return (
          n &&
            this._middlewares[n] &&
            (this._middlewares[n] = this._middlewares[n].filter(function (a) {
              return i ? a.create !== i : r ? a.name !== r : !1;
            })),
          this
        );
      }),
      (e.prototype.open = function () {
        return Xa(this);
      }),
      (e.prototype._close = function () {
        var t = this._state,
          n = _t.indexOf(this);
        if ((n >= 0 && _t.splice(n, 1), this.idbdb)) {
          try {
            this.idbdb.close();
          } catch {}
          this._novip.idbdb = null;
        }
        (t.dbReadyPromise = new R(function (r) {
          t.dbReadyResolve = r;
        })),
          (t.openCanceller = new R(function (r, i) {
            t.cancelOpen = i;
          }));
      }),
      (e.prototype.close = function () {
        this._close();
        var t = this._state;
        (this._options.autoOpen = !1),
          (t.dbOpenError = new N.DatabaseClosed()),
          t.isBeingOpened && t.cancelOpen(t.dbOpenError);
      }),
      (e.prototype.delete = function () {
        var t = this,
          n = arguments.length > 0,
          r = this._state;
        return new R(function (i, a) {
          var o = function () {
            t.close();
            var u = t._deps.indexedDB.deleteDatabase(t.name);
            (u.onsuccess = Z(function () {
              Ga(t._deps, t.name), i();
            })),
              (u.onerror = be(a)),
              (u.onblocked = t._fireOnBlocked);
          };
          if (n) throw new N.InvalidArgument('Arguments not allowed in db.delete()');
          r.isBeingOpened ? r.dbReadyPromise.then(o) : o();
        });
      }),
      (e.prototype.backendDB = function () {
        return this.idbdb;
      }),
      (e.prototype.isOpen = function () {
        return this.idbdb !== null;
      }),
      (e.prototype.hasBeenClosed = function () {
        var t = this._state.dbOpenError;
        return t && t.name === 'DatabaseClosed';
      }),
      (e.prototype.hasFailed = function () {
        return this._state.dbOpenError !== null;
      }),
      (e.prototype.dynamicallyOpened = function () {
        return this._state.autoSchema;
      }),
      Object.defineProperty(e.prototype, 'tables', {
        get: function () {
          var t = this;
          return te(this._allTables).map(function (n) {
            return t._allTables[n];
          });
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.prototype.transaction = function () {
        var t = Ja.apply(this, arguments);
        return this._transaction.apply(this, t);
      }),
      (e.prototype._transaction = function (t, n, r) {
        var i = this,
          a = K.trans;
        (!a || a.db !== this || t.indexOf('!') !== -1) && (a = null);
        var o = t.indexOf('?') !== -1;
        t = t.replace('!', '').replace('?', '');
        var u, s;
        try {
          if (
            ((s = n.map(function (d) {
              var l = d instanceof i.Table ? d.name : d;
              if (typeof l != 'string')
                throw new TypeError(
                  'Invalid table argument to Dexie.transaction(). Only Table or String are allowed'
                );
              return l;
            })),
            t == 'r' || t === fn)
          )
            u = fn;
          else if (t == 'rw' || t == dn) u = dn;
          else throw new N.InvalidArgument('Invalid transaction mode: ' + t);
          if (a) {
            if (a.mode === fn && u === dn)
              if (o) a = null;
              else
                throw new N.SubTransaction(
                  'Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY'
                );
            a &&
              s.forEach(function (d) {
                if (a && a.storeNames.indexOf(d) === -1)
                  if (o) a = null;
                  else
                    throw new N.SubTransaction(
                      'Table ' + d + ' not included in parent transaction.'
                    );
              }),
              o && a && !a.active && (a = null);
          }
        } catch (d) {
          return a
            ? a._promise(null, function (l, h) {
                h(d);
              })
            : ne(d);
        }
        var c = ci.bind(null, this, u, s, a, r);
        return a
          ? a._promise(u, c, 'lock')
          : K.trans
          ? lt(K.transless, function () {
              return i._whenReady(c);
            })
          : this._whenReady(c);
      }),
      (e.prototype.table = function (t) {
        if (!ve(this._allTables, t)) throw new N.InvalidTable('Table ' + t + ' does not exist');
        return this._allTables[t];
      }),
      e
    );
  })(),
  uo = typeof Symbol < 'u' && 'observable' in Symbol ? Symbol.observable : '@@observable',
  so = (function () {
    function e(t) {
      this._subscribe = t;
    }
    return (
      (e.prototype.subscribe = function (t, n, r) {
        return this._subscribe(
          !t || typeof t == 'function' ? { next: t, error: n, complete: r } : t
        );
      }),
      (e.prototype[uo] = function () {
        return this;
      }),
      e
    );
  })();
function fi(e, t) {
  return (
    te(t).forEach(function (n) {
      var r = e[n] || (e[n] = new Ie());
      en(r, t[n]);
    }),
    e
  );
}
function co(e) {
  return new so(function (t) {
    var n = Xn(e);
    function r(w) {
      n && ct();
      var p = function () {
          return je(e, { subscr: w, trans: null });
        },
        v = K.trans ? lt(K.transless, p) : p();
      return n && v.then(De, De), v;
    }
    var i = !1,
      a = {},
      o = {},
      u = {
        get closed() {
          return i;
        },
        unsubscribe: function () {
          (i = !0), Le.storagemutated.unsubscribe(l);
        },
      };
    t.start && t.start(u);
    var s = !1,
      c = !1;
    function d() {
      return te(o).some(function (w) {
        return a[w] && io(a[w], o[w]);
      });
    }
    var l = function (w) {
        fi(a, w), d() && h();
      },
      h = function () {
        if (!(s || i)) {
          a = {};
          var w = {},
            p = r(w);
          c || (Le(It, l), (c = !0)),
            (s = !0),
            Promise.resolve(p).then(
              function (v) {
                (s = !1), !i && (d() ? h() : ((a = {}), (o = w), t.next && t.next(v)));
              },
              function (v) {
                (s = !1), t.error && t.error(v), u.unsubscribe();
              }
            );
        }
      };
    return h(), u;
  });
}
var Wn;
try {
  Wn = {
    indexedDB: J.indexedDB || J.mozIndexedDB || J.webkitIndexedDB || J.msIndexedDB,
    IDBKeyRange: J.IDBKeyRange || J.webkitIDBKeyRange,
  };
} catch {
  Wn = { indexedDB: null, IDBKeyRange: null };
}
var qe = V;
ot(
  qe,
  H(H({}, rn), {
    delete: function (e) {
      var t = new qe(e, { addons: [] });
      return t.delete();
    },
    exists: function (e) {
      return new qe(e, { addons: [] })
        .open()
        .then(function (t) {
          return t.close(), !0;
        })
        .catch('NoSuchDatabaseError', function () {
          return !1;
        });
    },
    getDatabaseNames: function (e) {
      try {
        return Ya(qe.dependencies).then(e);
      } catch {
        return ne(new N.MissingAPI());
      }
    },
    defineClass: function () {
      function e(t) {
        se(this, t);
      }
      return e;
    },
    ignoreTransaction: function (e) {
      return K.trans ? lt(K.transless, e) : e();
    },
    vip: Un,
    async: function (e) {
      return function () {
        try {
          var t = Ln(e.apply(this, arguments));
          return !t || typeof t.then != 'function' ? R.resolve(t) : t;
        } catch (n) {
          return ne(n);
        }
      };
    },
    spawn: function (e, t, n) {
      try {
        var r = Ln(e.apply(n, t || []));
        return !r || typeof r.then != 'function' ? R.resolve(r) : r;
      } catch (i) {
        return ne(i);
      }
    },
    currentTransaction: {
      get: function () {
        return K.trans || null;
      },
    },
    waitFor: function (e, t) {
      var n = R.resolve(typeof e == 'function' ? qe.ignoreTransaction(e) : e).timeout(t || 6e4);
      return K.trans ? K.trans.waitFor(n) : n;
    },
    Promise: R,
    debug: {
      get: function () {
        return Ee;
      },
      set: function (e) {
        Vr(
          e,
          e === 'dexie'
            ? function () {
                return !0;
              }
            : ni
        );
      },
    },
    derive: ut,
    extend: se,
    props: ot,
    override: Br,
    Events: Pt,
    on: Le,
    liveQuery: co,
    extendObservabilitySet: fi,
    getByKeyPath: Re,
    setByKeyPath: ge,
    delByKeyPath: Li,
    shallowClone: jr,
    deepClone: Ot,
    getObjectDiff: cr,
    cmp: ue,
    asap: Nr,
    minKey: Kn,
    addons: [],
    connections: _t,
    errnames: Qn,
    dependencies: Wn,
    semVer: _r,
    version: _r
      .split('.')
      .map(function (e) {
        return parseInt(e);
      })
      .reduce(function (e, t, n) {
        return e + t / Math.pow(10, n * 2);
      }),
  })
);
qe.maxKey = xt(qe.dependencies.IDBKeyRange);
typeof dispatchEvent < 'u' &&
  typeof addEventListener < 'u' &&
  (Le(It, function (e) {
    if (!Oe) {
      var t;
      an
        ? ((t = document.createEvent('CustomEvent')), t.initCustomEvent(Fe, !0, !0, e))
        : (t = new CustomEvent(Fe, { detail: e })),
        (Oe = !0),
        dispatchEvent(t),
        (Oe = !1);
    }
  }),
  addEventListener(Fe, function (e) {
    var t = e.detail;
    Oe || tn(t);
  }));
function tn(e) {
  var t = Oe;
  try {
    (Oe = !0), Le.storagemutated.fire(e);
  } finally {
    Oe = t;
  }
}
var Oe = !1;
if (typeof BroadcastChannel < 'u') {
  var kr = new BroadcastChannel(Fe);
  Le(It, function (e) {
    Oe || kr.postMessage(e);
  }),
    (kr.onmessage = function (e) {
      e.data && tn(e.data);
    });
} else if (typeof self < 'u' && typeof navigator < 'u') {
  Le(It, function (e) {
    try {
      Oe ||
        (typeof localStorage < 'u' &&
          localStorage.setItem(Fe, JSON.stringify({ trig: Math.random(), changedParts: e })),
        typeof self.clients == 'object' &&
          _n([], self.clients.matchAll({ includeUncontrolled: !0 }), !0).forEach(function (t) {
            return t.postMessage({ type: Fe, changedParts: e });
          }));
    } catch {}
  }),
    typeof addEventListener < 'u' &&
      addEventListener('storage', function (e) {
        if (e.key === Fe) {
          var t = JSON.parse(e.newValue);
          t && tn(t.changedParts);
        }
      });
  var Or = self.document && navigator.serviceWorker;
  Or && Or.addEventListener('message', lo);
}
function lo(e) {
  var t = e.data;
  t && t.type === Fe && tn(t.changedParts);
}
R.rejectionMapper = Xi;
Vr(Ee, ni);
function di() {}
function fo(e, t) {
  return e === di
    ? t
    : function () {
        var n = e.apply(this, arguments);
        if (n && typeof n.then == 'function') {
          var r = this,
            i = arguments;
          return n.then(function () {
            return t.apply(r, i);
          });
        }
        return t.apply(this, arguments);
      };
}
function ho() {
  var e = Date.now(),
    t = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (n) {
      var r = (e + Math.random() * 16) % 16 | 0;
      return (e = Math.floor(e / 16)), (n === 'x' ? r : (r & 7) | 8).toString(16);
    });
  return t;
}
function vo(e, t) {
  return function (r) {
    return function (i, a, o, u) {
      if (e.dynamicallyOpened()) return r.apply(this, arguments);
      var s = !1;
      i === 'readwrite' &&
        a.some(function (d) {
          return o[d] && o[d].observable;
        }) &&
        ((s = !0), (a = a.slice(0)), a.indexOf('_changes') === -1 && a.push('_changes'));
      var c = r.call(this, i, a, o, u);
      return (
        s &&
          ((c._lastWrittenRevision = 0),
          c.on('complete', function () {
            if (c._lastWrittenRevision)
              if (!u)
                t.timeoutHandle && clearTimeout(t.timeoutHandle),
                  (t.timeoutHandle = setTimeout(function () {
                    delete t.timeoutHandle, t(c._lastWrittenRevision);
                  }, 25));
              else {
                var d = (function l(h) {
                  return h.parent ? l(h.parent) : h;
                })(u);
                d._lastWrittenRevision = Math.max(
                  c._lastWrittenRevision,
                  d.lastWrittenRevision || 0
                );
              }
          }),
          c.parent && c.parent.source && (c.source = c.parent.source)),
        c
      );
    };
  };
}
function po(e, t, n) {
  return function (i) {
    t.latestRevision[e.name] < i &&
      ((t.latestRevision[e.name] = i),
      V.ignoreTransaction(function () {
        t.on('latestRevisionIncremented').fire(e.name, i);
      }),
      n && n.setItem('Dexie.Observable/latestRevision/' + e.name, i));
  };
}
var yo = 1,
  mo = 2,
  go = 3;
function wo(e, t) {
  return function (r, i, a) {
    var o = void 0;
    r === void 0 &&
      t.schema.primKey.uuid &&
      ((r = o = V.Observable.createUUID()),
      t.schema.primKey.keyPath && V.setByKeyPath(i, t.schema.primKey.keyPath, r));
    var u = {
        source: a.source || null,
        table: t.name,
        key: r === void 0 ? null : r,
        type: yo,
        obj: i,
      },
      s = e._changes.add(u).then(function (c) {
        return (a._lastWrittenRevision = Math.max(a._lastWrittenRevision, c)), c;
      });
    return (
      (this.onsuccess = function (c) {
        r != c &&
          s._then(function () {
            (u.key = c), e._changes.put(u);
          });
      }),
      (this.onerror = function () {
        s._then(function (c) {
          e._changes.delete(c);
        });
      }),
      o
    );
  };
}
function _o(e, t) {
  return function (r, i, a, o) {
    var u = {},
      s = !1,
      c = V.deepClone(a);
    for (var d in r) {
      var l = r[d];
      if (typeof l > 'u') V.delByKeyPath(c, d), (u[d] = null), (s = !0);
      else {
        var h = V.getByKeyPath(a, d);
        l !== h &&
          JSON.stringify(l) !== JSON.stringify(h) &&
          (V.setByKeyPath(c, d, l), (u[d] = l), (s = !0));
      }
    }
    if (s) {
      var w = { source: o.source || null, table: t, key: i, type: mo, mods: u, oldObj: a, obj: c },
        p = e._changes.add(w);
      (this.onsuccess = function () {
        p._then(function (v) {
          o._lastWrittenRevision = Math.max(o._lastWrittenRevision, v);
        });
      }),
        (this.onerror = function () {
          p._then(function (v) {
            e._changes.delete(v);
          });
        });
    }
  };
}
function bo(e, t) {
  return function (r, i, a) {
    var o = e._changes
      .add({ source: a.source || null, table: t, key: r, type: go, oldObj: i })
      .then(function (u) {
        return (a._lastWrittenRevision = Math.max(a._lastWrittenRevision, u)), u;
      })
      .catch(function (u) {
        console.log(i), console.log(u.stack);
      });
    this.onerror = function () {
      o._then(function (u) {
        e._changes.delete(u);
      });
    };
  };
}
function Eo(e) {
  return function (n) {
    if (!n.hook._observing) {
      n.hook._observing = !0;
      var r = n.name;
      n.hook('creating').subscribe(wo(e, n)),
        n.hook('updating').subscribe(_o(e, r)),
        n.hook('deleting').subscribe(bo(e, r));
    }
  };
}
function So(e) {
  return function (n) {
    if (n.key && n.key.indexOf('Dexie.Observable/') === 0) {
      var r = n.key.split('/'),
        i = r[1],
        a = r[2];
      if (i === 'latestRevision') {
        var o = parseInt(n.newValue, 10);
        !isNaN(o) &&
          o > e.latestRevision[a] &&
          ((e.latestRevision[a] = o),
          V.ignoreTransaction(function () {
            e.on('latestRevisionIncremented').fire(a, o);
          }));
      } else if (i.indexOf('deadnode:') === 0) {
        var u = parseInt(i.split(':')[1], 10);
        n.newValue && e.on.suicideNurseCall.fire(a, u);
      } else i === 'intercomm' && n.newValue && e.on.intercomm.fire(a);
    }
  };
}
function Ao(e, t, n) {
  return function (i) {
    return function () {
      return (
        Object.keys(e._allTables).forEach(function (a) {
          var o = e._allTables[a];
          o.schema.observable && n(o), o.name === '_syncNodes' && o.mapToClass(t);
        }),
        i.apply(this, arguments)
      );
    };
  };
}
var ht = V.Promise;
function To(e, t, n, r, i) {
  var a = {};
  (e.observable.sendMessage = function (c, d, l, h) {
    if (((h = h || {}), !r.node))
      return h.wantReply ? ht.reject(new V.DatabaseClosedError()) : ht.resolve();
    var w = { message: d, destinationNode: l, sender: r.node.id, type: c };
    return (
      V.extend(w, h),
      V.ignoreTransaction(function () {
        var p = ['_intercomm'];
        h.wantReply && p.push('_syncNodes');
        var v = e
          .transaction('rw', p, function () {
            return h.wantReply
              ? e._syncNodes
                  .where('id')
                  .equals(l)
                  .count(function (m) {
                    return m
                      ? e._intercomm.add(w)
                      : e._syncNodes
                          .where('isMaster')
                          .above(0)
                          .first(function (E) {
                            return (w.destinationNode = E.id), e._intercomm.add(w);
                          });
                  })
              : e._intercomm.add(w);
          })
          .then(function (m) {
            var E = null;
            return (
              h.wantReply &&
                (E = new ht(function (S, g) {
                  a[m.toString()] = { resolve: S, reject: g };
                })),
              i && i.setItem('Dexie.Observable/intercomm/' + e.name, m.toString()),
              t.on.intercomm.fire(e.name),
              E
            );
          });
        if (h.wantReply) return v;
        v.catch(function () {});
      })
    );
  }),
    (e.observable.broadcastMessage = function (c, d, l) {
      if (r.node) {
        var h = r.node.id;
        V.ignoreTransaction(function () {
          e._syncNodes
            .toArray(function (w) {
              return ht.all(
                w
                  .filter(function (p) {
                    return p.type === 'local' && (l || p.id !== h);
                  })
                  .map(function (p) {
                    return e.observable.sendMessage(c, d, p.id);
                  })
              );
            })
            .catch(function () {});
        });
      }
    });
  function o() {
    return r.node
      ? V.ignoreTransaction(function () {
          return e.transaction('rw', '_intercomm', function () {
            return e._intercomm.where({ destinationNode: r.node.id }).toArray(function (c) {
              return (
                c.forEach(function (d) {
                  return u(d);
                }),
                e._intercomm
                  .where('id')
                  .anyOf(
                    c.map(function (d) {
                      return d.id;
                    })
                  )
                  .delete()
              );
            });
          });
        })
      : ht.reject(new V.DatabaseClosedError());
  }
  function u(c) {
    if (c.type === 'response') {
      var d = a[c.requestId.toString()];
      d &&
        (c.isFailure ? d.reject(c.message.error) : d.resolve(c.message.result),
        delete a[c.requestId.toString()]);
    } else
      (c.resolve = function (l) {
        e.observable.sendMessage('response', { result: l }, c.sender, { requestId: c.id });
      }),
        (c.reject = function (l) {
          e.observable.sendMessage('response', { error: l.toString() }, c.sender, {
            isFailure: !0,
            requestId: c.id,
          });
        }),
        e.on.message.fire(c);
  }
  function s(c) {
    c === e.name && o().catch('DatabaseClosedError', function () {});
  }
  return { onIntercomm: s, consumeIntercommMessages: o };
}
function Io(e) {
  return function (t, n) {
    (t._changes = '++rev'),
      (t._syncNodes = '++id,myRevision,lastHeartBeat,&url,isMaster,type,status'),
      (t._intercomm = '++id,destinationNode'),
      (t._uncommittedChanges = '++id,node'),
      e.call(this, t, n),
      Object.keys(n).forEach(function (r) {
        var i = n[r];
        i.primKey.name.indexOf('$$') === 0 &&
          ((i.primKey.uuid = !0),
          (i.primKey.name = i.primKey.name.substr(2)),
          (i.primKey.keyPath = i.primKey.keyPath.substr(2)));
      }),
      Object.keys(n).forEach(function (r) {
        r.indexOf('_') !== 0 && r.indexOf('$') !== 0 && (n[r].observable = !0);
      });
  };
}
function hi(e) {
  var t = 100;
  V.ignoreTransaction(function () {
    return e._syncNodes
      .orderBy('myRevision')
      .first(function (n) {
        return e._changes.where('rev').below(n.myRevision).limit(t).primaryKeys();
      })
      .then(function (n) {
        if (n.length !== 0)
          return e._changes.bulkDelete(n).then(function () {
            n.length === t &&
              setTimeout(function () {
                return e.isOpen() && hi(e);
              }, 500);
          });
      });
  }).catch(function () {});
}
var Ne = self,
  xo = V.defineClass({
    rev: Number,
    source: String,
    table: String,
    key: Object,
    type: Number,
    obj: Object,
    mods: Object,
    oldObj: Object,
  }),
  vt = V.override,
  Rr = V.Promise,
  Cr = !1;
function L(e) {
  if (!/^(3|4)\./.test(V.version)) throw new Error('Missing dexie version 3.x or 4.x');
  if (e.observable) {
    if (e.observable.version !== '{version}') throw new Error('Mixed versions of dexie-observable');
    return;
  }
  var t = 2e4,
    n = 2e4,
    r = 500,
    i = t - 5e3,
    a = L.localStorageImpl,
    o = V.defineClass({
      myRevision: Number,
      type: String,
      lastHeartBeat: Number,
      deleteTimeStamp: Number,
      url: String,
      isMaster: Number,
      syncProtocol: String,
      syncContext: null,
      syncOptions: Object,
      connected: !1,
      status: Number,
      appliedRemoteRevision: null,
      remoteBaseRevisions: [{ local: Number, remote: null }],
      dbUploadState: {
        tablesToUpload: [String],
        currentTable: String,
        currentKey: null,
        localBaseRevision: Number,
      },
    });
  (e.observable = { version: '{version}' }), (e.observable.SyncNode = o);
  var u = po(e, L, a),
    s = vo(e, u),
    c = Eo(e),
    d = Ao(e, o, c),
    l = { node: null },
    h = To(e, L, o, l, a),
    w = h.onIntercomm,
    p = h.consumeIntercommMessages;
  Object.defineProperty(e, '_localSyncNode', {
    get: function () {
      return l.node;
    },
  });
  var v = null,
    m = null;
  V.fake &&
    (e.version(1).stores({
      _syncNodes: '++id,myRevision,lastHeartBeat',
      _changes: '++rev',
      _intercomm: '++id,destinationNode',
      _uncommittedChanges: '++id,node',
    }),
    e._syncNodes.mapToClass(o),
    e._changes.mapToClass(xo),
    (l.node = new o({
      myRevision: 0,
      type: 'local',
      lastHeartBeat: Date.now(),
      deleteTimeStamp: null,
    }))),
    (e.Version.prototype._parseStoresSpec = vt(e.Version.prototype._parseStoresSpec, Io)),
    e.on.addEventType({ changes: 'asap', cleanup: [fo, di], message: 'asap' }),
    (e._createTransaction = vt(e._createTransaction, s)),
    (L.latestRevision[e.name] = L.latestRevision[e.name] || 0),
    (e.open = vt(e.open, d)),
    (e.close = vt(e.close, function (I) {
      return function () {
        return e.dynamicallyOpened()
          ? I.apply(this, arguments)
          : (u.timeoutHandle && (clearTimeout(u.timeoutHandle), delete u.timeoutHandle),
            L.on('latestRevisionIncremented').unsubscribe(S),
            L.on('suicideNurseCall').unsubscribe(T),
            L.on('intercomm').unsubscribe(w),
            L.on('beforeunload').unsubscribe(D),
            l.node &&
              l.node.id &&
              (L.on.suicideNurseCall.fire(e.name, l.node.id),
              a &&
                a.setItem(
                  'Dexie.Observable/deadnode:' + l.node.id.toString() + '/' + e.name,
                  'dead'
                ),
              (l.node.deleteTimeStamp = 1),
              (l.node.lastHeartBeat = 0),
              e._syncNodes.put(l.node),
              (l.node = null)),
            v && clearTimeout(v),
            (v = null),
            m && clearTimeout(m),
            (m = null),
            I.apply(this, arguments));
      };
    })),
    (e.delete = vt(e.delete, function (I) {
      return function () {
        return I.apply(this, arguments).then(function (k) {
          return (L.latestRevision[e.name] = 0), k;
        });
      };
    })),
    e.on(
      'ready',
      function () {
        return e.dynamicallyOpened()
          ? e
          : e
              .table('_changes')
              .orderBy('rev')
              .last(function (k) {
                var M = k ? k.rev : 0;
                return (
                  (l.node = new o({
                    myRevision: M,
                    type: 'local',
                    lastHeartBeat: Date.now(),
                    deleteTimeStamp: null,
                    isMaster: 0,
                  })),
                  L.latestRevision[e.name] < M &&
                    ((L.latestRevision[e.name] = M),
                    V.ignoreTransaction(function () {
                      L.on.latestRevisionIncremented.fire(M);
                    })),
                  e._syncNodes
                    .put(l.node)
                    .then(
                      V.ignoreTransaction(function () {
                        var U = 1;
                        return e._syncNodes
                          .orderBy('isMaster')
                          .reverse()
                          .modify(function (j) {
                            j.isMaster &&
                              (j.lastHeartBeat < Date.now() - t ? (j.isMaster = 0) : (U = 0)),
                              l.node && j.id === l.node.id && (j.isMaster = l.node.isMaster = U);
                          });
                      })
                    )
                    .then(function () {
                      L.on('latestRevisionIncremented', S),
                        L.on('beforeunload', D),
                        L.on('suicideNurseCall', T),
                        L.on('intercomm', w),
                        (v = setTimeout(y, r)),
                        (m = setTimeout(_, i));
                    })
                    .then(function () {
                      A();
                    })
                );
              });
      },
      !0
    );
  var E = 0;
  function S(I, k) {
    if (I === e.name) {
      if (E >= k) return;
      (E = k),
        V.vip(function () {
          g().catch('DatabaseClosedError', function () {});
        });
    }
  }
  function g(I, k, M) {
    if (!k && g.ongoingOperation) return g.ongoingOperation;
    var U = !1,
      j = l.node;
    if (!j) return Rr.reject(new V.DatabaseClosedError());
    var Q = 1e3,
      P = e._changes
        .where('rev')
        .above(j.myRevision)
        .limit(Q)
        .toArray(function (Y) {
          if (Y.length > 0) {
            var oe = Y[Y.length - 1];
            (U = Y.length === Q), e.on('changes').fire(Y, U), (j.myRevision = oe.rev);
          } else M && e.on('changes').fire([], !1);
          var de = !1;
          return e._syncNodes
            .where(':id')
            .equals(j.id)
            .modify(function (re) {
              (de = !0),
                (re.lastHeartBeat = Date.now()),
                (re.deleteTimeStamp = null),
                (re.myRevision = Math.max(re.myRevision, j.myRevision));
            })
            .then(function () {
              return de;
            });
        })
        .then(function (Y) {
          if (!Y)
            throw Cr
              ? new Error('Browser is shutting down')
              : (e.close(),
                console.error('Out of sync'),
                Ne.location && Ne.location.reload(!0),
                new Error('Out of sync'));
          if (U || L.latestRevision[e.name] > j.myRevision)
            return g(L.latestRevision[e.name], (k || 0) + 1, U);
        })
        .finally(function () {
          delete g.ongoingOperation;
        });
    return k || (g.ongoingOperation = P), P;
  }
  function _() {
    m = null;
    var I = l.node && l.node.id;
    I &&
      e
        .transaction('rw!', e._syncNodes, function () {
          e._syncNodes.where({ id: I }).first(function (k) {
            if (!k) {
              e.isOpen() && e.close();
              return;
            }
            return (k.lastHeartBeat = Date.now()), (k.deleteTimeStamp = null), e._syncNodes.put(k);
          });
        })
        .catch('DatabaseClosedError', function () {})
        .finally(function () {
          l.node && l.node.id === I && e.isOpen() && (m = setTimeout(_, i));
        });
  }
  function y() {
    v = null;
    var I = l.node && l.node.id;
    I &&
      V.vip(function () {
        g(L.latestRevision[e.name])
          .then(A)
          .then(p)
          .catch('DatabaseClosedError', function () {})
          .finally(function () {
            l.node && l.node.id === I && e.isOpen() && (v = setTimeout(y, r));
          });
      });
  }
  function A() {
    var I = l.node;
    return I
      ? e.transaction('rw', '_syncNodes', '_changes', '_intercomm', function () {
          var k = !1;
          e._syncNodes
            .where('lastHeartBeat')
            .below(Date.now() - t)
            .filter(function (M) {
              return M.type === 'local';
            })
            .modify(function (M) {
              M.deleteTimeStamp && M.deleteTimeStamp < Date.now()
                ? (delete this.value,
                  a && a.removeItem('Dexie.Observable/deadnode:' + M.id + '/' + e.name),
                  M.isMaster && (e._syncNodes.update(I, { isMaster: 1 }), (k = !0)),
                  e._intercomm.where({ destinationNode: M.id }).modify(function (U) {
                    U.wantReply ? (U.destinationNode = I.id) : delete this.value;
                  }))
                : M.deleteTimeStamp || (M.deleteTimeStamp = Date.now() + n);
            })
            .then(function () {
              return L.deleteOldChanges(e), e.on('cleanup').fire(k);
            });
        })
      : Rr.reject(new V.DatabaseClosedError());
  }
  function D() {
    l.node &&
      ((Cr = !0),
      (l.node.deleteTimeStamp = 1),
      (l.node.lastHeartBeat = 0),
      e._syncNodes.put(l.node),
      (L.wereTheOneDying = !0),
      a && a.setItem('Dexie.Observable/deadnode:' + l.node.id.toString() + '/' + e.name, 'dead'));
  }
  function T(I, k) {
    I === e.name &&
      !L.wereTheOneDying &&
      V.vip(function () {
        e._syncNodes.update(k, { deleteTimeStamp: 1, lastHeartBeat: 0 }).then(A);
      });
  }
}
L.version = '{version}';
L.latestRevision = {};
L.on = V.Events(null, 'latestRevisionIncremented', 'suicideNurseCall', 'intercomm', 'beforeunload');
L.createUUID = ho;
L.deleteOldChanges = hi;
L._onStorage = So(L);
L._onBeforeUnload = function () {
  L.on.beforeunload.fire();
};
try {
  L.localStorageImpl = Ne.localStorage;
} catch {}
Ne?.addEventListener &&
  (Ne.addEventListener('storage', L._onStorage),
  Ne.addEventListener('beforeunload', L._onBeforeUnload));
if (V.Observable) {
  if (V.Observable.version !== '{version}') throw new Error('Mixed versions of dexie-observable');
} else (V.Observable = L), V.addons.push(L);
V.Observable;
class ko extends V {
  constructor() {
    super('FuelDB'),
      this.version(8).stores({
        vaults: 'key',
        accounts: '&address, &name',
        networks: '&id, &url, &name',
        connections: 'origin',
        transactions: '&id',
      });
  }
}
const b = new ko(),
  Oo = '/',
  Ro = /^\/|\/$/g,
  Co = (e = '') => e.replace(Ro, '');
function Do(e, ...t) {
  const n = e != null,
    r = e?.[0] === '/' && e.length > 1,
    i = [e, ...t].filter(Boolean).map(Co);
  return r && n && i.unshift(''), i.join(Oo);
}
function mn(e) {
  return Do('/', e);
}
function su(e) {
  return e.replace(/http(s?):\/\//, '');
}
function cu(e) {
  return Array.isArray(e) ? e : e?.split(' ');
}
function Po(e) {
  return Array.isArray(e) ? e.join(' ') : e || '';
}
const lu = () => Math.random().toString(16).slice(2);
var vi = {};
(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 });
  /*! *****************************************************************************
	Copyright (c) Microsoft Corporation.

	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.

	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */ e.__assign =
    function () {
      return (
        (e.__assign =
          Object.assign ||
          function (o) {
            for (var u, s = 1, c = arguments.length; s < c; s++) {
              u = arguments[s];
              for (var d in u) Object.prototype.hasOwnProperty.call(u, d) && (o[d] = u[d]);
            }
            return o;
          }),
        e.__assign.apply(this, arguments)
      );
    };
  function t(a, o) {
    var u = {};
    for (var s in a)
      Object.prototype.hasOwnProperty.call(a, s) && o.indexOf(s) < 0 && (u[s] = a[s]);
    if (a != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var c = 0, s = Object.getOwnPropertySymbols(a); c < s.length; c++)
        o.indexOf(s[c]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(a, s[c]) &&
          (u[s[c]] = a[s[c]]);
    return u;
  }
  function n(a) {
    var o = typeof Symbol == 'function' && Symbol.iterator,
      u = o && a[o],
      s = 0;
    if (u) return u.call(a);
    if (a && typeof a.length == 'number')
      return {
        next: function () {
          return a && s >= a.length && (a = void 0), { value: a && a[s++], done: !a };
        },
      };
    throw new TypeError(o ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
  }
  function r(a, o) {
    var u = typeof Symbol == 'function' && a[Symbol.iterator];
    if (!u) return a;
    var s = u.call(a),
      c,
      d = [],
      l;
    try {
      for (; (o === void 0 || o-- > 0) && !(c = s.next()).done; ) d.push(c.value);
    } catch (h) {
      l = { error: h };
    } finally {
      try {
        c && !c.done && (u = s.return) && u.call(s);
      } finally {
        if (l) throw l.error;
      }
    }
    return d;
  }
  function i(a, o, u) {
    if (u || arguments.length === 2)
      for (var s = 0, c = o.length, d; s < c; s++)
        (d || !(s in o)) && (d || (d = Array.prototype.slice.call(o, 0, s)), (d[s] = o[s]));
    return a.concat(d || Array.prototype.slice.call(o));
  }
  (e.__read = r), (e.__rest = t), (e.__spreadArray = i), (e.__values = n);
})(vi);
const pi = 'fuel_';
function gn(e) {
  return `${pi}${e}`;
}
const We = class {
  static subscribe(e) {
    return (
      We.events.on('change', e),
      () => {
        We.events.off('change', e);
      }
    );
  }
  static emitChange() {
    We.events.emit('change');
  }
  static setItem(e, t) {
    localStorage.setItem(gn(e), JSON.stringify(t)), We.events.emit('change');
  }
  static getItem(e) {
    try {
      const t = localStorage.getItem(gn(e));
      return t ? JSON.parse(t) : null;
    } catch {
      return null;
    }
  }
  static clear() {
    Object.keys(localStorage)
      .filter((e) => e.startsWith(pi))
      .forEach((e) => localStorage.removeItem(e)),
      We.events.emit('change');
  }
  static removeItem(e) {
    localStorage.removeItem(gn(e)), We.events.emit('change');
  }
};
let Ko = We;
Ko.events = new qn.exports.EventEmitter();
var yi = {},
  ft = {};
Object.defineProperty(ft, '__esModule', { value: !0 });
var Mo = '.',
  Bo = {},
  No = 'xstate.guard',
  Fo = '';
ft.DEFAULT_GUARD_TYPE = No;
ft.EMPTY_ACTIVITY_MAP = Bo;
ft.STATE_DELIMITER = Mo;
ft.TARGETLESS_KEY = Fo;
var fr = {};
Object.defineProperty(fr, '__esModule', { value: !0 });
var jo = !0;
fr.IS_PRODUCTION = jo;
(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 });
  var t = vi,
    n = ft,
    r = fr,
    i;
  function a(f) {
    return Object.keys(f);
  }
  function o(f, x, C) {
    C === void 0 && (C = n.STATE_DELIMITER);
    var O = l(f, C),
      B = l(x, C);
    return Y(B)
      ? Y(O)
        ? B === O
        : !1
      : Y(O)
      ? O in B
      : Object.keys(O).every(function (F) {
          return F in B ? o(O[F], B[F]) : !1;
        });
  }
  function u(f) {
    try {
      return Y(f) || typeof f == 'number' ? ''.concat(f) : f.type;
    } catch {
      throw new Error('Events must be strings or objects with a string event.type property.');
    }
  }
  function s(f) {
    try {
      return Y(f) || typeof f == 'number' ? ''.concat(f) : P(f) ? f.name : f.type;
    } catch {
      throw new Error('Actions must be strings or objects with a string action.type property.');
    }
  }
  function c(f, x) {
    try {
      return Q(f) ? f : f.toString().split(x);
    } catch {
      throw new Error("'".concat(f, "' is not a valid state path."));
    }
  }
  function d(f) {
    return typeof f == 'object' && 'value' in f && 'context' in f && 'event' in f && '_event' in f;
  }
  function l(f, x) {
    if (d(f)) return f.value;
    if (Q(f)) return h(f);
    if (typeof f != 'string') return f;
    var C = c(f, x);
    return h(C);
  }
  function h(f) {
    if (f.length === 1) return f[0];
    for (var x = {}, C = x, O = 0; O < f.length - 1; O++)
      O === f.length - 2 ? (C[f[O]] = f[O + 1]) : ((C[f[O]] = {}), (C = C[f[O]]));
    return x;
  }
  function w(f, x) {
    for (var C = {}, O = Object.keys(f), B = 0; B < O.length; B++) {
      var F = O[B];
      C[F] = x(f[F], F, f, B);
    }
    return C;
  }
  function p(f, x, C) {
    var O,
      B,
      F = {};
    try {
      for (var $ = t.__values(Object.keys(f)), W = $.next(); !W.done; W = $.next()) {
        var G = W.value,
          ee = f[G];
        C(ee) && (F[G] = x(ee, G, f));
      }
    } catch (we) {
      O = { error: we };
    } finally {
      try {
        W && !W.done && (B = $.return) && B.call($);
      } finally {
        if (O) throw O.error;
      }
    }
    return F;
  }
  var v = function (f) {
    return function (x) {
      var C,
        O,
        B = x;
      try {
        for (var F = t.__values(f), $ = F.next(); !$.done; $ = F.next()) {
          var W = $.value;
          B = B[W];
        }
      } catch (G) {
        C = { error: G };
      } finally {
        try {
          $ && !$.done && (O = F.return) && O.call(F);
        } finally {
          if (C) throw C.error;
        }
      }
      return B;
    };
  };
  function m(f, x) {
    return function (C) {
      var O,
        B,
        F = C;
      try {
        for (var $ = t.__values(f), W = $.next(); !W.done; W = $.next()) {
          var G = W.value;
          F = F[x][G];
        }
      } catch (ee) {
        O = { error: ee };
      } finally {
        try {
          W && !W.done && (B = $.return) && B.call($);
        } finally {
          if (O) throw O.error;
        }
      }
      return F;
    };
  }
  function E(f) {
    if (!f) return [[]];
    if (Y(f)) return [[f]];
    var x = g(
      Object.keys(f).map(function (C) {
        var O = f[C];
        return typeof O != 'string' && (!O || !Object.keys(O).length)
          ? [[C]]
          : E(f[C]).map(function (B) {
              return [C].concat(B);
            });
      })
    );
    return x;
  }
  function S(f) {
    var x,
      C,
      O = {};
    if (f && f.length === 1 && f[0].length === 1) return f[0][0];
    try {
      for (var B = t.__values(f), F = B.next(); !F.done; F = B.next())
        for (var $ = F.value, W = O, G = 0; G < $.length; G++) {
          var ee = $[G];
          if (G === $.length - 2) {
            W[ee] = $[G + 1];
            break;
          }
          (W[ee] = W[ee] || {}), (W = W[ee]);
        }
    } catch (we) {
      x = { error: we };
    } finally {
      try {
        F && !F.done && (C = B.return) && C.call(B);
      } finally {
        if (x) throw x.error;
      }
    }
    return O;
  }
  function g(f) {
    var x;
    return (x = []).concat.apply(x, t.__spreadArray([], t.__read(f), !1));
  }
  function _(f) {
    return Q(f) ? f : [f];
  }
  function y(f) {
    return f === void 0 ? [] : _(f);
  }
  function A(f, x, C) {
    var O, B;
    if (P(f)) return f(x, C.data);
    var F = {};
    try {
      for (var $ = t.__values(Object.keys(f)), W = $.next(); !W.done; W = $.next()) {
        var G = W.value,
          ee = f[G];
        P(ee) ? (F[G] = ee(x, C.data)) : (F[G] = ee);
      }
    } catch (we) {
      O = { error: we };
    } finally {
      try {
        W && !W.done && (B = $.return) && B.call($);
      } finally {
        if (O) throw O.error;
      }
    }
    return F;
  }
  function D(f) {
    return /^(done|error)\./.test(f);
  }
  function T(f) {
    return !!(f instanceof Promise || (f !== null && (P(f) || typeof f == 'object') && P(f.then)));
  }
  function I(f) {
    return (
      f !== null && typeof f == 'object' && 'transition' in f && typeof f.transition == 'function'
    );
  }
  function k(f, x) {
    var C,
      O,
      B = t.__read([[], []], 2),
      F = B[0],
      $ = B[1];
    try {
      for (var W = t.__values(f), G = W.next(); !G.done; G = W.next()) {
        var ee = G.value;
        x(ee) ? F.push(ee) : $.push(ee);
      }
    } catch (we) {
      C = { error: we };
    } finally {
      try {
        G && !G.done && (O = W.return) && O.call(W);
      } finally {
        if (C) throw C.error;
      }
    }
    return [F, $];
  }
  function M(f, x) {
    return w(f.states, function (C, O) {
      if (C) {
        var B = (Y(x) ? void 0 : x[O]) || (C ? C.current : void 0);
        if (B) return { current: B, states: M(C, B) };
      }
    });
  }
  function U(f, x) {
    return { current: x, states: M(f, x) };
  }
  function j(f, x, C, O) {
    r.IS_PRODUCTION || e.warn(!!f, 'Attempting to update undefined context');
    var B =
      f &&
      C.reduce(function (F, $) {
        var W,
          G,
          ee = $.assignment,
          we = { state: O, action: $, _event: x },
          sn = {};
        if (P(ee)) sn = ee(F, x.data, we);
        else
          try {
            for (var Mt = t.__values(Object.keys(ee)), dt = Mt.next(); !dt.done; dt = Mt.next()) {
              var hr = dt.value,
                cn = ee[hr];
              sn[hr] = P(cn) ? cn(F, x.data, we) : cn;
            }
          } catch (Oi) {
            W = { error: Oi };
          } finally {
            try {
              dt && !dt.done && (G = Mt.return) && G.call(Mt);
            } finally {
              if (W) throw W.error;
            }
          }
        return Object.assign({}, F, sn);
      }, f);
    return B;
  }
  (e.warn = function () {}),
    r.IS_PRODUCTION ||
      (e.warn = function (f, x) {
        var C = f instanceof Error ? f : void 0;
        if (!(!C && f) && console !== void 0) {
          var O = ['Warning: '.concat(x)];
          C && O.push(C), console.warn.apply(console, O);
        }
      });
  function Q(f) {
    return Array.isArray(f);
  }
  function P(f) {
    return typeof f == 'function';
  }
  function Y(f) {
    return typeof f == 'string';
  }
  function oe(f, x) {
    if (f)
      return Y(f)
        ? { type: n.DEFAULT_GUARD_TYPE, name: f, predicate: x ? x[f] : void 0 }
        : P(f)
        ? { type: n.DEFAULT_GUARD_TYPE, name: f.name, predicate: f }
        : f;
  }
  function de(f) {
    try {
      return 'subscribe' in f && P(f.subscribe);
    } catch {
      return !1;
    }
  }
  var re = (function () {
      return (typeof Symbol == 'function' && Symbol.observable) || '@@observable';
    })(),
    ce =
      ((i = {}),
      (i[re] = function () {
        return this;
      }),
      (i[Symbol.observable] = function () {
        return this;
      }),
      i);
  function ye(f) {
    return !!f && '__xstatenode' in f;
  }
  function pe(f) {
    return !!f && typeof f.send == 'function';
  }
  var Ve = (function () {
    var f = 0;
    return function () {
      return f++, f.toString(16);
    };
  })();
  function le(f, x) {
    return Y(f) || typeof f == 'number' ? t.__assign({ type: f }, x) : f;
  }
  function tt(f, x) {
    if (!Y(f) && '$$type' in f && f.$$type === 'scxml') return f;
    var C = le(f);
    return t.__assign({ name: C.type, data: C, $$type: 'scxml', type: 'external' }, x);
  }
  function un(f, x) {
    var C = _(x).map(function (O) {
      return typeof O > 'u' || typeof O == 'string' || ye(O)
        ? { target: O, event: f }
        : t.__assign(t.__assign({}, O), { event: f });
    });
    return C;
  }
  function Si(f) {
    if (!(f === void 0 || f === n.TARGETLESS_KEY)) return y(f);
  }
  function Ai(f, x, C) {
    if (!r.IS_PRODUCTION) {
      var O = f.stack ? " Stacktrace was '".concat(f.stack, "'") : '';
      if (f === x)
        console.error(
          "Missing onError handler for invocation '"
            .concat(C, "', error was '")
            .concat(f, "'.")
            .concat(O)
        );
      else {
        var B = x.stack ? " Stacktrace was '".concat(x.stack, "'") : '';
        console.error(
          "Missing onError handler and/or unhandled exception/promise rejection for invocation '".concat(
            C,
            "'. "
          ) +
            "Original error: '"
              .concat(f, "'. ")
              .concat(O, " Current error is '")
              .concat(x, "'.")
              .concat(B)
        );
      }
    }
  }
  function Ti(f, x, C, O, B) {
    var F = f.options.guards,
      $ = { state: B, cond: x, _event: O };
    if (x.type === n.DEFAULT_GUARD_TYPE) return (F?.[x.name] || x.predicate)(C, O.data, $);
    var W = F?.[x.type];
    if (!W)
      throw new Error(
        "Guard '".concat(x.type, "' is not implemented on machine '").concat(f.id, "'.")
      );
    return W(C, O.data, $);
  }
  function Ii(f) {
    return typeof f == 'string' ? { type: f } : f;
  }
  function xi(f, x, C) {
    var O = function () {},
      B = typeof f == 'object',
      F = B ? f : null;
    return {
      next: ((B ? f.next : f) || O).bind(F),
      error: ((B ? f.error : x) || O).bind(F),
      complete: ((B ? f.complete : C) || O).bind(F),
    };
  }
  function ki(f, x) {
    return ''.concat(f, ':invocation[').concat(x, ']');
  }
  (e.createInvokeId = ki),
    (e.evaluateGuard = Ti),
    (e.flatten = g),
    (e.getActionType = s),
    (e.getEventType = u),
    (e.interopSymbols = ce),
    (e.isActor = pe),
    (e.isArray = Q),
    (e.isBehavior = I),
    (e.isBuiltInEvent = D),
    (e.isFunction = P),
    (e.isMachine = ye),
    (e.isObservable = de),
    (e.isPromiseLike = T),
    (e.isStateLike = d),
    (e.isString = Y),
    (e.keys = a),
    (e.mapContext = A),
    (e.mapFilterValues = p),
    (e.mapValues = w),
    (e.matchesState = o),
    (e.nestedPath = m),
    (e.normalizeTarget = Si),
    (e.partition = k),
    (e.path = v),
    (e.pathToStateValue = h),
    (e.pathsToStateValue = S),
    (e.reportUnhandledExceptionOnInvocation = Ai),
    (e.symbolObservable = re),
    (e.toArray = y),
    (e.toArrayStrict = _),
    (e.toEventObject = le),
    (e.toGuard = oe),
    (e.toInvokeSource = Ii),
    (e.toObserver = xi),
    (e.toSCXMLEvent = tt),
    (e.toStatePath = c),
    (e.toStatePaths = E),
    (e.toStateValue = l),
    (e.toTransitionConfigArray = un),
    (e.uniqueId = Ve),
    (e.updateContext = j),
    (e.updateHistoryStates = M),
    (e.updateHistoryValue = U);
})(yi);
class Be {
  static getNetworks() {
    return b.transaction('r', b.networks, async () => b.networks.toArray());
  }
  static getNetwork(t) {
    return b.transaction('r', b.networks, async () => b.networks.get({ id: t.id }));
  }
  static addNetwork(t) {
    return b.transaction('rw', b.networks, async () => {
      const n = await b.networks.count(),
        r = await b.networks.add({
          ...t.data,
          ...(n === 0 && { isSelected: !0 }),
          id: yi.uniqueId(),
        });
      return b.networks.get(r);
    });
  }
  static updateNetwork(t) {
    if (!t.data) throw new Error('Network.data undefined');
    if (!t.id) throw new Error('Network.id undefined');
    return b.transaction(
      'rw',
      b.networks,
      async () => (await b.networks.update(t.id, t.data), b.networks.get(t.id))
    );
  }
  static removeNetwork(t) {
    return b.transaction('rw', b.networks, async () => {
      const n = (await Be.getNetworks()) || [];
      if (n.length === 1) throw new Error('You need to stay with at least one network');
      const r = await Be.getNetwork(t);
      if (r?.isSelected) {
        const i = n.filter((a) => a.id !== t.id)[0];
        await Be.selectNetwork({ id: i.id });
      }
      return await b.networks.where(t).delete(), r?.id;
    });
  }
  static getSelectedNetwork() {
    return b.transaction('r', b.networks, async () =>
      (await b.networks.toArray()).find((t) => t.isSelected)
    );
  }
  static selectNetwork(t) {
    return b.transaction('rw', b.networks, async () => {
      const n = await b.networks.filter((r) => Boolean(r.isSelected)).first();
      return (
        n?.id && (await Be.updateNetwork({ id: n.id, data: { isSelected: !1 } })),
        await Be.updateNetwork({ id: t.id, data: { isSelected: !0 } }),
        b.networks.get(t.id)
      );
    });
  }
  static addFirstNetwork() {
    return Be.addNetwork({ data: { name: 'Testnet', url: 'http://localhost:4000/graphql' } });
  }
  static clearNetworks() {
    return b.transaction('rw', b.networks, async () => b.networks.clear());
  }
  static async getChainInfo(t) {
    return new wn(t.providerUrl).getChain();
  }
  static async getNodeInfo(t) {
    return new wn(t.providerUrl).getNodeInfo();
  }
}
var dr = (e, t, n) => {
    if (!t.has(e)) throw TypeError('Cannot ' + n);
  },
  X = (e, t, n) => (dr(e, t, 'read from private field'), n ? n.call(e) : t.get(e)),
  Ge = (e, t, n) => {
    if (t.has(e)) throw TypeError('Cannot add the same private member more than once');
    t instanceof WeakSet ? t.add(e) : t.set(e, n);
  },
  me = (e, t, n, r) => (dr(e, t, 'write to private field'), r ? r.call(e, n) : t.set(e, n), n),
  Dr = (e, t, n) => (dr(e, t, 'access private method'), n),
  Uo = class {
    constructor() {
      this.storage = new Map();
    }
    async getItem(e) {
      return this.storage.get(e);
    }
    async setItem(e, t) {
      this.storage.set(e, t);
    }
    async removeItem(e) {
      this.storage.delete(e);
    }
    async clear() {
      return this.storage.clear();
    }
  },
  Lo = Uo,
  He,
  mi = class {
    constructor(e) {
      Ge(this, He, void 0),
        (this.pathKey = '{}'),
        (this.rootPath = `m/44'/1179993420'/${this.pathKey}'/0/0`),
        (this.numberOfAccounts = 0),
        me(this, He, e.secret || Ri.generate()),
        (this.rootPath = e.rootPath || this.rootPath),
        (this.numberOfAccounts = e.numberOfAccounts || 1);
    }
    getDerivePath(e) {
      return this.rootPath.includes(this.pathKey)
        ? this.rootPath.replace(this.pathKey, String(e))
        : `${this.rootPath}/${e}`;
    }
    serialize() {
      return {
        secret: X(this, He),
        rootPath: this.rootPath,
        numberOfAccounts: this.numberOfAccounts,
      };
    }
    getAccounts() {
      let e = [],
        t = 0;
      do {
        let n = xe.fromMnemonic(X(this, He), this.getDerivePath(t));
        e.push({ publicKey: n.publicKey, address: n.address }), (t += 1);
      } while (t < this.numberOfAccounts);
      return e;
    }
    addAccount() {
      this.numberOfAccounts += 1;
      let e = xe.fromMnemonic(X(this, He), this.getDerivePath(this.numberOfAccounts - 1));
      return { publicKey: e.publicKey, address: e.address };
    }
    exportAccount(e) {
      let t = 0;
      do {
        let n = xe.fromMnemonic(X(this, He), this.getDerivePath(t));
        if (n.address.equals(e)) return n.privateKey;
        t += 1;
      } while (t < this.numberOfAccounts);
      throw new Error('Account not found');
    }
    getWallet(e) {
      let t = this.exportAccount(e);
      return xe.fromPrivateKey(t);
    }
  };
(He = new WeakMap()), (mi.type = 'mnemonic');
var Ke,
  gi = class {
    constructor(e) {
      Ge(this, Ke, []),
        e.secret
          ? me(this, Ke, [e.secret])
          : me(this, Ke, e.accounts || [xe.generate().privateKey]);
    }
    serialize() {
      return { accounts: X(this, Ke) };
    }
    getPublicAccount(e) {
      let t = xe.fromPrivateKey(e);
      return { address: t.address, publicKey: t.publicKey };
    }
    getAccounts() {
      return X(this, Ke).map(this.getPublicAccount);
    }
    addAccount() {
      let e = xe.generate();
      return X(this, Ke).push(e.privateKey), this.getPublicAccount(e.privateKey);
    }
    exportAccount(e) {
      let t = X(this, Ke).find((n) => xe.fromPrivateKey(n).address.equals(e));
      if (!t) throw new Error('Address not found');
      return t;
    }
    getWallet(e) {
      let t = this.exportAccount(e);
      return xe.fromPrivateKey(t);
    }
  };
(Ke = new WeakMap()), (gi.type = 'privateKey');
var Ae = {
  invalid_vault_type: 'Invalid VaultType',
  address_not_found: 'Address not found',
  vault_not_found: 'Vault not found',
  wallet_not_unlocked: 'Wallet is locked',
  passphrase_not_match: "Passphrase didn't match",
};
function Te(e, t) {
  if (!e) throw new Error(t);
}
var fe,
  $e,
  _e,
  Hn,
  wi,
  $n,
  _i,
  bi = class extends qn.exports.EventEmitter {
    constructor(e) {
      super(),
        Ge(this, Hn),
        Ge(this, $n),
        (this.storage = new Lo()),
        (this.STORAGE_KEY = 'WalletManager'),
        Ge(this, fe, []),
        Ge(this, $e, ''),
        Ge(this, _e, !0),
        (this.storage = e?.storage || this.storage);
    }
    get isLocked() {
      return X(this, _e);
    }
    exportVault(e) {
      Te(!X(this, _e), Ae.wallet_not_unlocked);
      let t = X(this, fe).find((n, r) => r === e);
      return Te(t, Ae.vault_not_found), t.vault.serialize();
    }
    getVaults() {
      return X(this, fe).map((e, t) => ({ title: e.title, type: e.type, vaultId: t }));
    }
    getAccounts() {
      return X(this, fe).flatMap((e, t) =>
        e.vault.getAccounts().map((n) => ({ ...n, vaultId: t }))
      );
    }
    getWallet(e) {
      let t = X(this, fe).find((n) => n.vault.getAccounts().find((r) => r.address.equals(e)));
      return Te(t, Ae.address_not_found), t.vault.getWallet(e);
    }
    exportPrivateKey(e) {
      Te(!X(this, _e), Ae.wallet_not_unlocked);
      let t = X(this, fe).find((n) => n.vault.getAccounts().find((r) => r.address.equals(e)));
      return Te(t, Ae.address_not_found), t.vault.exportAccount(e);
    }
    async addAccount(e) {
      await this.loadState();
      let t = X(this, fe)[e?.vaultId || 0];
      await Te(t, Ae.vault_not_found);
      let n = t.vault.addAccount();
      return await this.saveState(), n;
    }
    async removeVault(e) {
      X(this, fe).splice(e, 1), await this.saveState();
    }
    async addVault(e) {
      await this.loadState();
      let t = this.getVaultClass(e.type),
        n = new t(e);
      me(this, fe, X(this, fe).concat({ title: e.title, type: e.type, vault: n })),
        await this.saveState();
    }
    async lock() {
      me(this, _e, !0), me(this, fe, []), me(this, $e, ''), this.emit('lock');
    }
    async unlock(e) {
      me(this, $e, e), me(this, _e, !1), await this.loadState(), this.emit('unlock');
    }
    async updatePassphrase(e, t) {
      let n = X(this, _e);
      await this.unlock(e),
        me(this, $e, t),
        await this.saveState(),
        await this.loadState(),
        n && (await this.lock());
    }
    async loadState() {
      await Te(!X(this, _e), Ae.wallet_not_unlocked);
      let e = await this.storage.getItem(this.STORAGE_KEY);
      if (e) {
        let t = await Ci(X(this, $e), JSON.parse(e));
        me(this, fe, Dr(this, $n, _i).call(this, t.vaults));
      }
    }
    async saveState() {
      await Te(!X(this, _e), Ae.wallet_not_unlocked);
      let e = await Di(X(this, $e), { vaults: Dr(this, Hn, wi).call(this, X(this, fe)) });
      await this.storage.setItem(this.STORAGE_KEY, JSON.stringify(e)), this.emit('update');
    }
    getVaultClass(e) {
      let t = bi.Vaults.find((n) => n.type === e);
      return Te(t, Ae.invalid_vault_type), t;
    }
  },
  Ei = bi;
(fe = new WeakMap()),
  ($e = new WeakMap()),
  (_e = new WeakMap()),
  (Hn = new WeakSet()),
  (wi = function (e) {
    return e.map(({ title: t, type: n, vault: r }) => ({ title: t, type: n, data: r.serialize() }));
  }),
  ($n = new WeakSet()),
  (_i = function (e) {
    return e.map(({ title: t, type: n, data: r }) => {
      let i = this.getVaultClass(n);
      return { title: t, type: n, vault: new i(r) };
    });
  }),
  (Ei.Vaults = [mi, gi]);
class Vo {
  async getItem(t) {
    return b.transaction('r', b.vaults, async () => (await b.vaults.get({ key: t }))?.data);
  }
  async setItem(t, n) {
    await b.transaction('rw', b.vaults, b.accounts, async () => {
      await b.vaults.put({ key: t, data: n });
    });
  }
  async removeItem(t) {
    await b.transaction('rw', b.vaults, b.accounts, async () => {
      await b.vaults.where({ key: t }).delete();
    });
  }
  async clear() {
    await b.transaction('rw', b.vaults, b.accounts, async () => {
      await b.vaults.clear(), await b.accounts.clear();
    });
  }
}
async function pt(e) {
  const t = new Vo(),
    n = new Ei({ storage: t });
  return await n.unlock(e), n;
}
const Ye = [
    {
      assetId: '0x0000000000000000000000000000000000000000000000000000000000000000',
      name: 'Ethereum',
      symbol: 'ETH',
      imageUrl: mn('assets/eth.svg'),
    },
    {
      assetId: '0xe90f62d5216f58ffaf19e6eba07f944cc2cd36f9800b89419d52b6927f53976701',
      name: 'Dai',
      symbol: 'DAI',
      imageUrl: mn('assets/dai.svg'),
    },
    {
      assetId: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
      name: 'Bitcoin',
      symbol: 'BTC',
      imageUrl: mn('assets/btc.svg'),
    },
  ],
  Wo = { [Ye[0].assetId]: Ye[0], [Ye[1].assetId]: Ye[1], [Ye[2].assetId]: Ye[2] };
function fu(e, t) {
  return { ...Wo[e.toString()], ...t };
}
function Ho(e) {
  return Ye[0].assetId === e.assetId;
}
class Yn {
  static async addAccount(t) {
    return b.transaction('rw', b.accounts, async () => {
      const n = await b.accounts.count(),
        r = { ...t.data, isSelected: n === 0, isHidden: !!t.data.isHidden };
      return await b.accounts.add(r), b.accounts.get({ address: t.data.address });
    });
  }
  static async getAccounts() {
    return b.transaction('r', b.accounts, async () => b.accounts.toCollection().sortBy('name'));
  }
  static async clearAccounts() {
    return b.transaction('rw', b.accounts, async () => b.accounts.clear());
  }
  static async fetchBalance(t) {
    if (!t.account) throw new Error('Account not defined');
    if (!t.providerUrl) throw new Error('Invalid Provider URL');
    const { account: n, providerUrl: r } = t;
    try {
      const i = await $o(r, n.publicKey),
        o = i.find(Ho)?.amount;
      return (
        (await Yn.setBalance({
          data: {
            address: n.address || '',
            balance: vr(o || 0).toString(),
            balanceSymbol: 'ETH',
            balances: i.map((s) => ({ ...s, amount: s.amount.toString() })),
          },
        })) ?? n
      );
    } catch {
      return (
        (await Yn.setBalance({
          data: {
            address: n.address || '',
            balance: vr(0).toString(),
            balanceSymbol: 'ETH',
            balances: [],
          },
        })) ?? n
      );
    }
  }
  static async setBalance(t) {
    if (b.isOpen())
      return b.transaction('rw!', b.accounts, async () => {
        const { address: n, ...r } = t.data;
        return await b.accounts.update(n, r), b.accounts.get({ address: t.data.address });
      });
  }
  static async hideAccount(t) {
    if (b.isOpen())
      return b.transaction('rw!', b.accounts, async () => {
        const { address: n, ...r } = t.data;
        return await b.accounts.update(n, r), b.accounts.get({ address: t.data.address });
      });
  }
  static toMap(t) {
    return t.reduce((n, r) => ({ ...n, [r.address]: r }), {});
  }
  static fromMap(t) {
    return Object.values(t || {});
  }
  static async createManager({ data: t }) {
    if (!t?.password || !t?.mnemonic) throw new Error('Invalid data');
    await b.vaults.clear();
    try {
      const n = await pt(t.password);
      return await n.addVault({ type: 'mnemonic', secret: Po(t.mnemonic) }), n;
    } catch (n) {
      throw (console.log(n), n);
    }
  }
  static async addNewAccount({ data: t }) {
    if ((await this.getAccounts()).find((u) => u.name === t.name))
      throw new Error('Account name already exists');
    const a = await t.manager.addAccount();
    return await this.addAccount({
      data: { name: t.name, address: a.address.toString(), publicKey: a.publicKey },
    });
  }
  static async exportVault(t) {
    const n = await pt(t.password),
      { secret: r } = n.exportVault(0);
    return r;
  }
  static async unlock(t) {
    const r = (await pt(t.password)).getWallet(Pr.fromPublicKey(t.account.publicKey)),
      i = await Be.getSelectedNetwork();
    if (!i) throw new Error('Network not found!');
    return r.connect(i.url), r;
  }
  static async unlockVault(t) {
    return await pt(t.password);
  }
  static async changePassword(t) {
    const n = await pt(t.oldPassword);
    return await n.updatePassphrase(t.oldPassword, t.newPassword), n.lock();
  }
  static getSelectedAccount() {
    return b.transaction('r', b.accounts, async () =>
      (await b.accounts.toArray()).find((t) => t.isSelected)
    );
  }
  static selectAccount(t) {
    return b.transaction(
      'rw',
      b.accounts,
      async () => (
        await b.accounts.filter((n) => !!n.isSelected).modify({ isSelected: !1 }),
        await b.accounts.update(t.address, { isSelected: !0 }),
        b.accounts.get(t.address)
      )
    );
  }
  static updateAccount(t) {
    if (!t.data) throw new Error('Account.data undefined');
    if (!t.address) throw new Error('Account.address undefined');
    return b.transaction(
      'rw',
      b.accounts,
      async () => (await b.accounts.update(t.address, t.data), b.accounts.get(t.address))
    );
  }
}
function $o(e, t = '0x00') {
  const n = new wn(e),
    r = Pr.fromPublicKey(t);
  return n.getBalances(r);
}
class du {
  static async addConnection(t) {
    return b.transaction(
      'rw',
      b.connections,
      async () => (await b.connections.add(t.data), b.connections.get({ origin: t.data.origin }))
    );
  }
  static async removeConnection(t) {
    return b.transaction('rw', b.connections, async () => b.connections.delete(t));
  }
  static async getConnection(t) {
    return b.transaction('r', b.connections, async () => b.connections.get({ origin: t }));
  }
  static async clearConnections() {
    return b.transaction('rw', b.connections, async () => b.connections.clear());
  }
  static async getConnections() {
    return b.transaction('r', b.connections, async () => b.connections.toArray());
  }
}
var gt = ((e) => (
  (e.uiEvent = 'uiEvent'),
  (e.event = 'event'),
  (e.request = 'request'),
  (e.response = 'response'),
  (e.removeConnection = 'removeConnection'),
  e
))(gt || {});
class hu extends qn.exports {
  constructor() {
    super(),
      (this.onCommunicationMessage = (t) => {
        switch (t.type) {
          case gt.response:
            this.onResponse(t);
            break;
          case gt.request:
            this.onRequest(t);
            break;
          case gt.event:
            this.onEvent(t);
            break;
          case gt.uiEvent:
            this.onUIEvent(t);
            break;
        }
      }),
      (this.client = new pr.JSONRPCClient(this.sendRequest.bind(this))),
      (this.server = new pr.JSONRPCServer());
  }
  externalMethods(t) {
    t.forEach((n) => {
      let r = n;
      n.name && (r = n.name), this.server.addMethod(r, this[r].bind(this));
    });
  }
  async sendRequest(t) {
    throw new Error('Send request not implemented');
  }
  sendResponse(t, n) {
    throw new Error('Send response not implemented');
  }
  onEvent(t) {
    t.events.forEach((n) => {
      this.emit(n.event, ...n.params);
    });
  }
  onResponse(t) {
    this.client.receive(t.response);
  }
  onRequest(t) {
    this.server.receive(t.request).then((n) => {
      this.sendResponse(n, t);
    });
  }
  onUIEvent(t) {}
}
export {
  Yn as A,
  hu as B,
  du as C,
  au as I,
  eu as M,
  Be as N,
  Ki as P,
  Ko as S,
  iu as T,
  Xo as V,
  nu as W,
  vi as _,
  ou as a,
  ru as b,
  gt as c,
  b as d,
  fr as e,
  lu as f,
  fu as g,
  Jo as h,
  Do as i,
  Bi as j,
  Ho as k,
  Go as l,
  Po as m,
  cu as n,
  tu as o,
  su as p,
  Gn as q,
  mn as r,
  qo as s,
  yi as u,
  uu as w,
};