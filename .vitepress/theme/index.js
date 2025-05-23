import { watch, onMounted, nextTick } from "vue";
import { useRoute } from "vitepress";
import DefaultTheme from "vitepress/theme-without-fonts";
import "./vars.css";
import "./main.css";
import mediumZoom from "medium-zoom";
import Icon from "./components/Icon/index.vue";
import Cursor from "./components/Cursor/index.vue";
import KeyTag from "./components/KeyTag/index.vue";

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
    ctx.app.component("Icon", Icon);
    ctx.app.component("Cursor", Cursor);
    ctx.app.component("KeyTag", KeyTag);
  },
  setup() {
    const route = useRoute();
    const initZoom = () => {
      mediumZoom(".main img:not(.no-zoomable)", {
        background: "var(--vp-c-bg)",
      });
    };

    onMounted(() => {
      initZoom();
    });

    watch(
      () => route.path,
      () =>
        nextTick(() => {
          initZoom();
        }),
    );
  },
};
