<template>
<div class="tiptap_menu_bar">

        <div class="container-fluid">
            <div class="content">
                <div class="whiteBar">

                    <a href="#"><img class="docsLogo" src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724c0e4b0c296de94c833/1441211585166/bluedoclogo.png?" alt=""></a>

                    <h1 id="untitled">
                        <!--          <em>{{pdfJson.data.pdf.pages[0].text_segments[0].title}}</em>-->
                    </h1>

                    <ul id="mainMenu">
                        <li>File</li>
                        <li>Edit</li>
                        <li>View</li>
                        <li>Insert</li>
                        <li>Format</li>
                        <li>Tools</li>
                        <li>Table</li>
                        <li>Add-Ons</li>
                        <li>Help</li>
                    </ul>

                    <div class="rightSide">

                        <span id="emailLogin">Document Name: FredYA<img id="emailcaret" src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bde4b076794acc4218/1441211581744/caret.png?format=300w" alt=""></span>

                        <ul class="extraButtons">
                            <li>Comments</li>
                            <li>Share</li>
                        </ul>

                    </div><!--end right side-->

                </div><!-- end whiteBar-->

                <div class="toolBar">

                    <div class="toolBag"></div>

                    <!-- PRINTER - BACK - FWD - PAINT -->

                    <a href="#"><img class="toolbarButtonsPrint" src="#" alt=""></a>
                    <a href="#"><img class="toolbarButtons" src="#" alt=""></a>
                    <a href="#"><img class="toolbarButtons" src="#" alt=""></a>
                    <a href="#"><img class="toolbarButtonsPaint" src="#" alt=""></a>

                    <!-- 100% - NORMAL TEXT - ARIAL - 12 -->

                    <a href="#"><span class="toolbarButtons100">100%<img id="hunCaret" src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bde4b076794acc4218/1441211581744/caret.png?format=300w" alt=""></span></a>
                    <a href="#"><span class="toolbarButtonsNormal">Normal Text<img id="normalCaret" src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bde4b076794acc4218/1441211581744/caret.png?format=300w" alt=""></span></a>
                    <a href="#"><span class="toolbarButtonsArial">Open Sans<img id="openCaret" src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bde4b076794acc4218/1441211581744/caret.png?format=300w" alt=""></span></a>
                    <a href="#"><span class="toolbarButtons11">12<img id="twelveCaret" src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bde4b076794acc4218/1441211581744/caret.png?format=300w" alt=""></span></a>

                    <!-- BOLD - ITALICS - UNDERLINE - COLOR - HYPERLINK - COMMENT -->

                    <a href="#"><img class="toolbarButtonsB" src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bfe4b076794acc4251/1441211583548/bold.png?format=300w" alt=""></a>
                    <a href="#"><img class="toolbarButtonsI" src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bfe4b076bc359bf9e6/1441211583336/i.png?format=300w" alt=""></a>
                    <a href="#"><img class="toolbarButtonsU" src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bfe4b076bc359bf9ea/1441211583819/under.png?format=300w" alt=""></a>
                    <a href="#"><img class="toolbarButtonsColor" src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bfe4b076bc359bf9e8/1441211583603/color.png?format=300w" alt=""></a>
                    <a href="#"><img class="toolbarButtonsHyper" src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bfe4b076794acc4253/1441211583862/hyper.png?format=300w" alt=""></a>
                    <a href="#"><img class="toolbarButtonsMsg" src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bfe4b076794acc424f/1441211583411/msg.png?format=300w" alt=""></a>

                    <!-- LEFT - CENTER - RIGHT - JUSTIFY - LINE SPACING - NUMBERED LIST - BULLET LIST - INDENT LT - INDENT RT - CLEAR -->

                    <a href="#"><img class="toolbarButtons" src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bfe4b076794acc4255/1441211584087/left.png?format=300w" alt=""></a>
                    <a href="#"><img class="toolbarButtons" src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724c0e4b076bc359bf9ef/1441211585710/center.png?format=300w" alt=""></a>
                    <a href="#"><img class="toolbarButtons" src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bfe4b076bc359bf9ed/1441211583977/right.png?format=300w" alt=""></a>
                    <a href="#"><img class="toolbarButtonsJust" src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bfe4b076bc359bf9e4/1441211583110/just.png?format=300w" alt=""></a>
                    <a href="#"><img class="toolbarButtonsLine" src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bee4b076bc359bf9e0/1441211582962/line.png?format=300w" alt=""></a>
                    <a href="#"><img class="toolbarButtonsNumbered" src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bee4b076794acc4246/1441211582789/numbered.png?format=300w" alt=""></a>
                    <a href="#"><img class="toolbarButtonsBullet" src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bee4b076794acc424b/1441211582989/bullet.png?format=300w" alt=""></a>
                    <a href="#"><img class="toolbarButtonsIndentLeft" src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bee4b076794acc421f/1441211582304/indentright.png?format=300w" alt=""></a>
                    <a href="#"><img class="toolbarButtonsIndentRight" src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bee4b076794acc4221/1441211582457/indentleft.png?format=300w" alt=""></a>
                    <a href="#"><img class="toolbarButtonsClear" src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bee4b076794acc421d/1441211582124/clear.png?format=300w" alt=""></a>


                </div><!--end toolbag -->

                <div class="slider">
                    <img src="" alt="">
                </div><!--end slider-->

            </div><!-- end toolBar-->

        </div><!-- end header -->

    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

// @Component({
//     props: ['content', 'number'],
// })

export default class TiptarMenu extends Vue {
   public mounted() {
       // console.log(this.content);
   }
}
</script>

<style scoped>

</style>
