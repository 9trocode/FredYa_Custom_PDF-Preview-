<template>
<div class="Menubar">

        <div class="container-fluid">
            <div class="content">
                <div class="whiteBar">

                    <a href="#!"></a>

                    <h1 contentEditable="true" id="untitled" style="outline: none !important; border-color: white">
                        <em>{{content[0].content[0].text}}</em>
                    </h1>

                    <ul contentEditable="false" id="mainMenu">
                        <div class="list">File</div>
                        <div class="list">Edit</div>
                        <div class="list">View</div>
                        <div class="list">Insert</div>
                        <div class="list">Format</div>
                        <div class="list">Tools</div>
                        <div class="list">Table</div>
                        <div class="list">Add-Ons</div>
                        <div class="list">Help</div>
                    </ul>

                    <div class="rightSide" contentEditable="false">

                        <span id="emailLogin">Document Name: FredYA </span>

                        <ul class="extraButtons">
                            <div class="list">Comments</div>
                            <div class="list">Share</div>
                        </ul>

                    </div><!--end right side-->

                </div><!-- end whiteBar-->

                <div class="toolBar" contentEditable="false">

                    <div class="toolBag"></div>

                    <!-- PRINTER - BACK - FWD - PAINT -->

                    <a @click="initToolBar('undo')" class="toolbarButtons" href="#!" style="margin-left: 50px;"><i class="fas fa-undo-alt"></i></a>
                    <a @click="initToolBar('redo')" class="toolbarButtons" href="#!"><i class="fas fa-redo-alt"></i></a>
                    <a class="toolbarButtons" href="#!" onclick="window.print()"><i class="fas fa-print"></i></a>
                    <a href="#!"><img alt="" class="toolbarButtonsPaint" src="#"></a>

                    <!-- 100% - NORMAL TEXT - ARIAL - 12 -->

                    <a href="#!"><span class="toolbarButtons100">100%</span></a>
                    <span class="toolbarButtonsNormal">
                        <label>
                        <select class="toolbarButtonsNormal" style="" v-model="formatValue" @change="formatDoc('formatBlock')">
                            <option value="normal" :selected="true">Normal Text</option>
                            <option value="h1">Title 1 &lt;h1&gt;</option>
                            <option value="h2">Title 2 &lt;h2&gt;</option>
                            <option value="h3">Title 3 &lt;h3&gt;</option>
                            <option value="h4">Title 4 &lt;h4&gt;</option>
                            <option value="h5">Title 5 &lt;h5&gt;</option>
                            <option value="h6">Subtitle &lt;h6&gt;</option>
                            <option value="p">Paragraph &lt;p&gt;</option>
                            <option value="pre">Preformatted &lt;pre&gt;</option>
                        </select>
                        </label>
                                            </span>
                    <a href="#"><span class="toolbarButtonsArial">Open Sans</span></a>
                    <a href="#"><span class="toolbarButtons11">12
                    <select id="fontSize" >
                    <option value="10">10px</option>
                    <option value="12">12px</option>
                    <option value="14">14px</option>
                    <option value="20">20px</option>
                    <option value="22">22px</option>
                    <option selected="true" value="30">30px</option>
                    <option value="35">35px</option>
                    <option value="40">40px</option>
                    <option value="45">45px</option>
                    <option value="50">50px</option>
                    </select></span></a>

                    <!-- BOLD - ITALICS - UNDERLINE - COLOR - HYPERLINK - COMMENT -->

                    <a @click="initToolBar('bold')" href="#!"><span class="toolbarButtonsB"><i class="fas fa-bold"></i></span></a>
                    <a @click="initToolBar('italic')" class="toolbarButtonsI" href="#!"><i class="fas fa-italic"></i></a>
                    <a @click="initToolBar('underline')" class="toolbarButtonsU" href="#!"><i class="fas fa-underline"></i></a>
<!--                    <a href="#"><img class="toolbarButtonsColor" src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bfe4b076bc359bf9e8/1441211583603/color.png?format=300w" alt=""></a>-->
<!--                    <a href="#"><img class="toolbarButtonsHyper" src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bfe4b076794acc4253/1441211583862/hyper.png?format=300w" alt=""></a>-->
<!--                    <a href="#"><img class="toolbarButtonsMsg" src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bfe4b076794acc424f/1441211583411/msg.png?format=300w" alt=""></a>-->

                    <!-- LEFT - CENTER - RIGHT - JUSTIFY - LINE SPACING - NUMBERED LIST - BULLET LIST - INDENT LT - INDENT RT - CLEAR -->

                    <a @click="initToolBar('justifyLeft')" class="toolbarButtonsU" href="#!"><i class="fas fa-align-left"></i></a>
                    <a @click="initToolBar('justifyCenter')" class="toolbarButtons" href="#!"><i class="fas fa-align-center"></i></a>
                    <a @click="initToolBar('justifyRight')" class="toolbarButtonsU" href="#!"><i class="fas fa-align-right"></i></a>
                    <a @click="initToolBar('justifyFull')" class="toolbarButtonsJust" href="#!"><i class="fas fa-align-justify"></i></a>
                    <a @click="initToolBar('insertOrderedList')" class="toolbarButtonsU" href="#!"><i class="fas fa-list-ol"></i></a>
                    <a @click="initToolBar('insertUnorderedList')" class="toolbarButtonsU" href="#!"><i class="fas fa-list"></i></a>

                    <a @click="initToolBar('indent')" class="toolbarButtonsIndentLeft" href="#!"><i class="fas fa-indent"></i></a>
                    <a @click="initToolBar('outdent')" class="toolbarButtonsIndentRight" href="#!"><i class="fas fa-outdent"></i></a>
                    <a @click="initToolBar('removeFormat')" class="toolbarButtonsLine" href="#!"><i class="fas fa-remove-format"></i></a>


                </div><!--end toolbag -->

                <div class="slider">
                    <img alt="" src="">
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

export default class Menubar extends Vue {

        public formatValue: any = 'normal';

       public initToolBar(todo: any) {
           document.execCommand(todo);
       }

       public formatDoc(todo: any) {
           document.execCommand(todo, false, this.formatValue);
        }
}
</script>

<style  lang="sass" scoped>
a
    cursor: pointer
</style>
