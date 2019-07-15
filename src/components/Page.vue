<template>
    <div contentEditable="true" class="page" :style="`text-align: ${number === 1 ?'center': 'left'};padding-top: ${number === 1 ?'25%': 'auto'}`">
        <div v-for="(paragraph, key) in content" :key="key">
            <span class="span" v-for="(span, index) in paragraph.content" :key="index" :style="styleParagraph(paragraph, span)">
                {{span.text}}
            </span>

        </div>

    </div>

</template>

<script>
    import { Component, Vue,  Watch } from 'vue-property-decorator';

    @Component({
        props: ['content', 'number'],
    })

    export default class Page extends Vue {

          styleParagraph( paragraph, span ){
              let fontFamily = ['Calibri', 'Calibri-Bold'].includes(paragraph.font_style) ? 'Calibri': paragraph.font_style;
              let fontWeight = paragraph.font_style === 'Calibri-Bold' ? 'bold': 'normal';
              return `font-size: ${paragraph.font_size};font-weight: ${fontWeight};font-family: ${fontFamily};margin-top: ${span.top};margin-left: ${span.left};margin-bottom: ${span.bottom};margin-right: ${span.right};`;
          }

        // mounted() {
        //     // console.log(this.content);
        // }
    }
</script>

<style lang="sass" scoped>
.page
    padding: 65px
    margin-top: 12px
    margin-bottom: 30px
    outline: none !important
    border-color: white
    .span
        line-height: 40px
</style>
