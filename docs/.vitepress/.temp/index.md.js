import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { ref, useSSRContext, onMounted, onBeforeUnmount, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import axios from "axios";
import { Autoplay, Pagination } from "swiper/modules";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
class Client {
  constructor() {
    this.baseURLTest = "http://127.0.0.1:9001/";
    this.baseURL = "https://alemonjs.com/";
  }
  /**
   * 服务器
   * @param config
   * @returns 
   */
  async server(config) {
    const req = await axios.create({
      baseURL: this.baseURL,
      timeout: 6e3
    });
    return req(config);
  }
  /**
   * 得到赞助列表
   * @param typing 
   * @returns 
   */
  async searchSponsors(typing) {
    return await this.server({
      method: "GET",
      url: "/v1/api/sponsors/search",
      params: {
        Typing: typing
      }
    });
  }
}
const API = new Client();
const modules = [Autoplay, Pagination];
const autoplay = {
  delay: 2e3,
  disableOnInteraction: false
};
const pagination = {
  clickable: true,
  type: "progressbar"
};
const size = ref(1);
const update = () => {
  size.value = window.innerWidth < 600 ? 1 : 2;
  if (window.innerWidth >= 860) {
    size.value = 3;
  }
  if (window.innerWidth >= 1200) {
    size.value = 4;
  }
  if (window.innerWidth >= 1400) {
    size.value = 5;
  }
};
const _sfc_main$1 = {
  __name: "HomeView",
  __ssrInlineRender: true,
  setup(__props) {
    const Personal = ref([]);
    const Special = ref([]);
    onMounted(() => {
      update();
      window.addEventListener("resize", update);
      API.searchSponsors(1).then((res) => res.data).then((res) => {
        if ((res == null ? void 0 : res.code) == 200 && (res == null ? void 0 : res.data) && Array.isArray(res.data)) {
          for (const item of res.data) {
            Personal.value.push(item);
          }
        }
      }).catch(console.error);
      API.searchSponsors(2).then((res) => res.data).then((res) => {
        if ((res == null ? void 0 : res.code) == 200 && (res == null ? void 0 : res.data) && Array.isArray(res.data)) {
          for (const item of res.data) {
            Special.value.push(item);
          }
        }
      }).catch(console.error);
    });
    onBeforeUnmount(() => {
      window.removeEventListener("resize", update);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-a28e644f><div class="list-title" data-v-a28e644f> Special Sponsorship（特殊赞助） </div><div class="flex-wrap-center" data-v-a28e644f>`);
      _push(ssrRenderComponent(unref(Swiper), {
        modules: unref(modules),
        spaceBetween: 30,
        loop: Special.value.length > unref(size),
        "slides-per-view": unref(size),
        autoplay: unref(autoplay),
        pagination: unref(pagination)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(Special.value, (item) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                class: "item",
                key: item.name
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<a target="_blank"${ssrRenderAttr("href", item.url)} data-v-a28e644f${_scopeId2}><img class="img" alt=""${ssrRenderAttr("src", item.logo)} data-v-a28e644f${_scopeId2}><div class="item-title" data-v-a28e644f${_scopeId2}>${ssrInterpolate(item.name)}</div><div class="item-title" data-v-a28e644f${_scopeId2}>${ssrInterpolate(item.doc)}</div></a>`);
                  } else {
                    return [
                      createVNode("a", {
                        target: "_blank",
                        href: item.url
                      }, [
                        createVNode("img", {
                          class: "img",
                          alt: "",
                          src: item.logo
                        }, null, 8, ["src"]),
                        createVNode("div", { class: "item-title" }, toDisplayString(item.name), 1),
                        createVNode("div", { class: "item-title" }, toDisplayString(item.doc), 1)
                      ], 8, ["href"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(Special.value, (item) => {
                return openBlock(), createBlock(unref(SwiperSlide), {
                  class: "item",
                  key: item.name
                }, {
                  default: withCtx(() => [
                    createVNode("a", {
                      target: "_blank",
                      href: item.url
                    }, [
                      createVNode("img", {
                        class: "img",
                        alt: "",
                        src: item.logo
                      }, null, 8, ["src"]),
                      createVNode("div", { class: "item-title" }, toDisplayString(item.name), 1),
                      createVNode("div", { class: "item-title" }, toDisplayString(item.doc), 1)
                    ], 8, ["href"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="list-title" data-v-a28e644f> Personal Sponsorship（个人赞助） </div><div class="flex-wrap-center" data-v-a28e644f>`);
      _push(ssrRenderComponent(unref(Swiper), {
        modules: unref(modules),
        spaceBetween: 30,
        loop: Personal.value.length > unref(size),
        "slides-per-view": unref(size),
        autoplay: unref(autoplay),
        pagination: unref(pagination)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(Personal.value, (item) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                class: "item",
                key: item.name
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<a target="_blank"${ssrRenderAttr("href", item.url)} data-v-a28e644f${_scopeId2}><img class="img" alt=""${ssrRenderAttr("src", item.logo)} data-v-a28e644f${_scopeId2}><div class="item-title" data-v-a28e644f${_scopeId2}>${ssrInterpolate(item.name)}</div><div class="item-title" data-v-a28e644f${_scopeId2}>${ssrInterpolate(item.doc)}</div></a>`);
                  } else {
                    return [
                      createVNode("a", {
                        target: "_blank",
                        href: item.url
                      }, [
                        createVNode("img", {
                          class: "img",
                          alt: "",
                          src: item.logo
                        }, null, 8, ["src"]),
                        createVNode("div", { class: "item-title" }, toDisplayString(item.name), 1),
                        createVNode("div", { class: "item-title" }, toDisplayString(item.doc), 1)
                      ], 8, ["href"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(Personal.value, (item) => {
                return openBlock(), createBlock(unref(SwiperSlide), {
                  class: "item",
                  key: item.name
                }, {
                  default: withCtx(() => [
                    createVNode("a", {
                      target: "_blank",
                      href: item.url
                    }, [
                      createVNode("img", {
                        class: "img",
                        alt: "",
                        src: item.logo
                      }, null, 8, ["src"]),
                      createVNode("div", { class: "item-title" }, toDisplayString(item.name), 1),
                      createVNode("div", { class: "item-title" }, toDisplayString(item.doc), 1)
                    ], 8, ["href"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/views/HomeView.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const HomeView = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-a28e644f"]]);
const __pageData = JSON.parse('{"title":"阿柠檬开发框架","description":"","frontmatter":{"title":"阿柠檬开发框架","layout":"home","hero":{"name":"阿柠檬开发框架","text":"构建属于你的机器人","tagline":"基于 JavaScript 所构建的跨平台开发框架","image":{"src":"/img/alemon.jpg","alt":"Logo"},"actions":[{"theme":"brand","text":"快速开始","link":"/v1.2/markdown"},{"theme":"alt","text":"接口文档","link":"/v1.2/examples/api/apps"}]},"features":[{"title":"简单易懂","details":"JavaScript函数式编程","icon":{"src":"/img/edt.png","width":80,"height":80}},{"title":"功能直调","details":"所有平台的功能都一个样","icon":{"src":"/img/api.png","width":80,"height":80}},{"title":"敏捷开发","details":"丰富的脚手架与生态环境","icon":{"src":"/img/post.png","width":80,"height":80}}]},"headers":[],"relativePath":"index.md","filePath":"index.md","lastUpdated":1706461522000}');
const __default__ = { name: "index.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(HomeView, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
