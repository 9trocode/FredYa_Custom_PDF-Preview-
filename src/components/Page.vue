<template>
    <div class="page">
        <div id="paragraph" v-for="(paragraph, key) in content" :key="key">
            <p v-for="(span, index) in paragraph.content" :key="index" :style="styleParagraph(span)">
                {{span.text}}
            </p>
<!--            <span  id="headline">{{pdfJson.data.pdf.pages[0].text_segments[0].title}}</span><br><br>-->
<!--            <span id="h2" style=" margin-left: 36%">{{pdfJson.data.pdf.pages[0].text_segments[1].title}}</span><br><br>-->
<!--            <span id="h2" style=" margin-left: 42%">{{pdfJson.data.pdf.pages[0].text_segments[2].title}}</span><br><br><br>-->

<!--            <span class="h2"><strong>{{pdfJson.data.pdf.pages[1].text_segments[0].title}}</strong></span><br><br>-->

<!--            {{pdfJson.data.pdf.pages[1].tables[0].csv}}<br><br>-->
<!--            {{pdfJson.data.pdf.pages[2].tables[0].csv}}<br><br>-->

<!--            <span class="h2"><strong>{{pdfJson.data.pdf.pages[3].text_segments[0].title}}</strong></span><br><br>-->

<!--            <em>{{pdfJson.data.pdf.pages[3].text_segments[1].title}}</em><br><br>-->
<!--            <em>{{pdfJson.data.pdf.pages[3].text_segments[2].title}}</em><br><br>-->
<!--            <em>{{pdfJson.data.pdf.pages[3].text_segments[3].title}}</em><br><br>-->
<!--            <em>{{pdfJson.data.pdf.pages[3].text_segments[4].title}}</em><br><br>-->


<!--            {{pdfJson.data.pdf.pages[3].tables[0].csv}}.<br><br>-->
<!--            {{pdfJson.data.pdf.pages[3].tables[1].csv}}.<br><br>-->
        </div><!--end paragraph-->

    </div><!-- end page-->

</template>

<script>
    import { Component, Vue,  Watch } from 'vue-property-decorator';

    @Component({
        props: ['content', 'number'],
    })

    export default class Page extends Vue {

          styleParagraph(span){
              return `
              font-size: ${this.content.font_size};
              font-family: ${this.content.font_style};
              top: ${span.top};
              left: ${span.left};
              bottom: ${span.bottom};
              right: ${span.right};

              `;
          }

        mounted() {
            // console.log(this.content);
        }
    }
</script>

<style lang="sass" scoped>

</style>
