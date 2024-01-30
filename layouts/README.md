# Layout 運用

## Step 1. 建立預設布局模板

在布局模板中，通常會包含一個 <slot /> 插槽，這個未命名的插槽 (slot) 即為預設插槽，這將會是採用這個布局模板的頁面元件，顯示的內容容器位置。

### 布局模板中的插槽 

default.vue 檔案內程式碼內，有一個插槽 <slot />，這裡就會是 <NuxtLayout> 內的元素所顯示的位置。


## Step 2. 添加 元件

調整 app.vue 檔案，內容如下，我們添加 <NuxtLayout> 作為布局模板顯示的位置，name 屬性預設是 default，不過我們還是寫上 name="default" 避免誤會，這個 name 屬性值對應的即是布局模板的名稱。

# 結構圖

+---------------------------+
| app.vue                   |
| +-----------------------+ |
| | layout                | |
| | +-------------------+ | |
| | | page              | | |
| | |                   | | |
| | |                   | | |
| | +-------------------+ | |
| +-----------------------+ |
+---------------------------+

# 相關連結
 [IT 鐵人幫](https://ithelp.ithome.com.tw/articles/10296877)

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/guide/directory-structure/layouts) to learn more.