import dayjs from 'dayjs';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('timeformat', {
    /**
     * @func 生命週期
     * @param el 綁定的的 DOM element
     * @param binding element 綁定的值
     */
    mounted(el, binding) {
      const time = dayjs(binding.value).format('YYYY-MM-DD');
      el.innerText = time;
    },
  });
});
