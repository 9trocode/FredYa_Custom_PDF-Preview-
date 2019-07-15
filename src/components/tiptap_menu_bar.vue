<template>
<div class="tiptap_menu_bar">


        <div class="container-fluid">
            <div class="content">
                <div class="whiteBar">

                    <a href="#"><img class="docsLogo" src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724c0e4b0c296de94c833/1441211585166/bluedoclogo.png?" alt=""></a>

                    <h1 id="untitled" style="outline: none !important; border-color: white" contentEditable="true">
                        <em>{{content[0].content[0].text}}</em>
                    </h1>

                    <ul id="mainMenu" contentEditable="false">
                        <list>File</list>
                        <list>Edit</list>
                        <list>View</list>
                        <list>Insert</list>
                        <list>Format</list>
                        <list>Tools</list>
                        <list>Table</list>
                        <list>Add-Ons</list>
                        <list>Help</list>
                    </ul>

                    <div class="rightSide" contentEditable="false">

                        <span id="emailLogin">Document Name: FredYA<img id="emailcaret" src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bde4b076794acc4218/1441211581744/caret.png?format=300w" alt=""></span>

                        <ul class="extraButtons">
                            <list>Comments</list>
                            <list>Share</list>
                        </ul>

                    </div><!--end right side-->

                </div><!-- end whiteBar-->

                <div class="toolBar" contentEditable="false">

                    <div class="toolBag"></div>

                    <!-- PRINTER - BACK - FWD - PAINT -->

                    <a href="#!" @click="documentToolbar('undo')" class="toolbarButtons" style="margin-left: 50px;"><i class="fas fa-undo-alt"></i></a>
                    <a href="#!" @click="documentToolbar('redo')" class="toolbarButtons"><i class="fas fa-redo-alt"></i></a>
                    <a href="#!" onclick="window.print()" class="toolbarButtons"><i class="fas fa-print"></i></a>
                    <a href="#"><img class="toolbarButtonsPaint" src="#" alt=""></a>

                    <!-- 100% - NORMAL TEXT - ARIAL - 12 -->

                    <a href="#"><span class="toolbarButtons100">100%<img id="hunCaret" src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bde4b076794acc4218/1441211581744/caret.png?format=300w" alt=""></span></a>
                    <a href="#"><span class="toolbarButtonsNormal">Normal Text<img id="normalCaret" src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bde4b076794acc4218/1441211581744/caret.png?format=300w" alt=""></span></a>
                    <a href="#"><span class="toolbarButtonsArial">Open Sans<img id="openCaret" src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bde4b076794acc4218/1441211581744/caret.png?format=300w" alt=""></span></a>
                    <a href="#"><span class="toolbarButtons11">12
                    <select id="fontSize" >
			<option value="10">10px</option>
			<option value="12">12px</option>
			<option value="14">14px</option>
			<option value="20">20px</option>
			<option value="22">22px</option>
			<option value="30" selected="true">30px</option>
			<option value="35">35px</option>
			<option value="40">40px</option>
			<option value="45">45px</option>
			<option value="50">50px</option>
		</select></span></a>

                    <!-- BOLD - ITALICS - UNDERLINE - COLOR - HYPERLINK - COMMENT -->

                    <a href="#!" @click="documentToolbar('bold')"><span class="toolbarButtonsB"><i class="fas fa-bold"></i></span></a>
                    <a href="#!" @click="documentToolbar('italic')" class="toolbarButtonsI"><i class="fas fa-italic"></i></a>
                    <a href="#!" @click="documentToolbar('underline')" class="toolbarButtonsU"><i class="fas fa-underline"></i></a>
<!--                    <a href="#"><img class="toolbarButtonsColor" src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bfe4b076bc359bf9e8/1441211583603/color.png?format=300w" alt=""></a>-->
<!--                    <a href="#"><img class="toolbarButtonsHyper" src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bfe4b076794acc4253/1441211583862/hyper.png?format=300w" alt=""></a>-->
<!--                    <a href="#"><img class="toolbarButtonsMsg" src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bfe4b076794acc424f/1441211583411/msg.png?format=300w" alt=""></a>-->

                    <!-- LEFT - CENTER - RIGHT - JUSTIFY - LINE SPACING - NUMBERED LIST - BULLET LIST - INDENT LT - INDENT RT - CLEAR -->

                    <a href="#!" @click="documentToolbar('justifyLeft')" class="toolbarButtonsU"><i class="fas fa-align-left"></i></a>
                    <a href="#!" @click="documentToolbar('justifyCenter')" class="toolbarButtons"><i class="fas fa-align-center"></i></a>
                    <a href="#!" @click="documentToolbar('justifyRight')" class="toolbarButtonsU"><i class="fas fa-align-right"></i></a>
                    <a href="#!" @click="documentToolbar('justifyFull')" class="toolbarButtonsJust"><i class="fas fa-align-justify"></i></a>
                    <a href="#!" @click="documentToolbar('insertOrderedList')" class="toolbarButtonsU"><i class="fas fa-list-ol"></i></a>
                    <a href="#!" @click="documentToolbar('insertUnorderedList')" class="toolbarButtonsU"><i class="fas fa-list"></i></a>

                    <a href="#!" @click="documentToolbar('indent')" class="toolbarButtonsIndentLeft"><i class="fas fa-indent"></i></a>
                    <a href="#!" @click="documentToolbar('outdent')" class="toolbarButtonsIndentRight"><i class="fas fa-outdent"></i></a>
                    <a href="#!" @click="documentToolbar('removeFormat')" class="toolbarButtonsLine"><i class="fas fa-remove-format"></i></a>


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

@Component({
    props: ['content'],
})

export default class TiptarMenu extends Vue {

   public mounted() {
       // this.editor = new Editor({
       //     content: '<p>This is just a boring paragraph</p>',
       // });
   }

   public documentToolbar(todo: any) {
       document.execCommand(todo);
   }
}
</script>

<style  lang="sass" scoped>
a
    cursor: pointer
</style>
