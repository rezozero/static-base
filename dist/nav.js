define(['exports', 'jquery', 'abstract-nav'], function (exports, _jquery, _abstractNav) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Nav = undefined;

    var _jquery2 = _interopRequireDefault(_jquery);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    var _get = function get(object, property, receiver) {
        if (object === null) object = Function.prototype;
        var desc = Object.getOwnPropertyDescriptor(object, property);

        if (desc === undefined) {
            var parent = Object.getPrototypeOf(object);

            if (parent === null) {
                return undefined;
            } else {
                return get(parent, property, receiver);
            }
        } else if ("value" in desc) {
            return desc.value;
        } else {
            var getter = desc.get;

            if (getter === undefined) {
                return undefined;
            }

            return getter.call(receiver);
        }
    };

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var Nav = exports.Nav = function (_AbstractNav) {
        _inherits(Nav, _AbstractNav);

        function Nav() {
            _classCallCheck(this, Nav);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Nav).call(this));

            _this.$cont = (0, _jquery2.default)('#nav');
            _this.$links = _this.$cont.find('a').not('[target="_blank"]');
            return _this;
        }

        _createClass(Nav, [{
            key: 'initEvents',
            value: function initEvents(router) {
                _get(Object.getPrototypeOf(Nav.prototype), 'initEvents', this).call(this, router);
                if (router.options.ajaxEnabled) {
                    this.$links.on('click', router.onLinkClick.bind(router));
                }
            }
        }]);

        return Nav;
    }(_abstractNav.AbstractNav);
});
//# sourceMappingURL=nav.js.map
