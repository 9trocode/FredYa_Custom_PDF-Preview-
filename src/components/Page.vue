<template>
    <div contentEditable="true" class="page"
         :style="stylePage(p_dimensions)">
        <div v-for="(paragraph, key) in content" :key="key">
            <p class="span" v-for="(span, index) in paragraph.content" :key="index">
                <label>
                    <span style="border:none; width: auto; height: auto;" class="indent" :style="styleParagraph(paragraph, span)">{{span.text}}</span>
                </label>
            </p>

        </div>

    </div>

</template>

<script>
    import {Component, Vue, Watch} from 'vue-property-decorator';

    @Component({
        props: ['content', 'number', 'p_dimensions'],
    })
    export default class Page extends Vue {
        styleParagraph = (paragraph, span) => {
            let fontFamily = ['Calibri', 'Calibri-Bold'].includes(paragraph.font_style) ? 'Calibri' : paragraph.font_style;
            let fontWeight = paragraph.font_style === 'Calibri-Bold' ? 'bold' : 'normal';
            return `font-size: ${paragraph.font_size}px;font-weight: ${fontWeight}px;font-family: ${fontFamily};position:absolute;top: ${span.top}px;left: ${span.left}px;bottom: ${span.bottom};right:${span.right}`;
        };
        stylePage = (p_dimensions) => {
            let pageOrientation = p_dimensions.orientation === 'PORTRAIT' ? '800.32px' : `${p_dimensions.width}`;
            let pagePadding = p_dimensions.orientation === 'PORTRAIT' ? '47' : `${p_dimensions.padding_right}`;
            return `max-width: 800.32px;min-width: 800.32px; width:${pageOrientation}; height:${p_dimensions.height}px; padding-top:${p_dimensions.padding_top}px;bottom:${p_dimensions.padding_bottom}px;padding-right:${pagePadding}px;padding-left:${p_dimensions.padding_left}px;`;
        };
    }
</script>

<style lang="sass" scoped>
    .page
        margin-top: 5px
        outline: none !important
        border-color: white

        .span
            line-height: 40px

</style>
