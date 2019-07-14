<template>
  <div>
  <div class="home">

      <Menubar></Menubar>

      <div class="clear"></div>


    <json_receiver :content="content.page_content" v-for="(content, key) in pdfJson.data.results" :number="content.page_number"></json_receiver>

  </div>

  </div>

</template>

<script lang="ts">
import { Component, Vue,  Watch } from 'vue-property-decorator';
import Header from '@/components/tiptap_menu_bar.vue';
import Page from '@/components/Page.vue';

@Component({
    components: {
        Menubar: Header,
        json_receiver: Page,
    },
})
export default class Home extends Vue {

    public pdfJson!: '' | {}; // <- for static type checking

    @Watch('update_json_prop')

    public update_json_prop($val: any[], $oldVal: any) {
        this.pdfJson = $val;
    }

}
</script>

<style lang="sass">
    @import  '../assets/init.sass'
</style>
