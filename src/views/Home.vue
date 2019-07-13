<template>
  <div>
  <div class="home">
  <div class="container-fluid">
    <div class="header">
      <div class="whiteBar">

        <a href="#"><img class="docsLogo" src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724c0e4b0c296de94c833/1441211585166/bluedoclogo.png?" alt=""></a>

        <h1 id="untitled">
          <em>{{pdfJson.data.pdf.pages[0].text_segments[0].title}}</em>
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

          <span id="emailLogin">Document Name: {{pdfJson.data.pdf.name}}<img id="emailcaret" src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bde4b076794acc4218/1441211581744/caret.png?format=300w" alt=""></span>

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

  <div class="clear"></div>


  <div class="page">
    <p id="paragraph">
      <span  id="headline">{{pdfJson.data.pdf.pages[0].text_segments[0].title}}</span><br><br>
      <span id="h2" style=" margin-left: 36%">{{pdfJson.data.pdf.pages[0].text_segments[1].title}}</span><br><br>
      <span id="h2" style=" margin-left: 42%">{{pdfJson.data.pdf.pages[0].text_segments[2].title}}</span><br><br><br>

      <span class="h2"><strong>{{pdfJson.data.pdf.pages[1].text_segments[0].title}}</strong></span><br><br>

      {{pdfJson.data.pdf.pages[1].tables[0].csv}}<br><br>
      {{pdfJson.data.pdf.pages[2].tables[0].csv}}<br><br>

      <span class="h2"><strong>{{pdfJson.data.pdf.pages[3].text_segments[0].title}}</strong></span><br><br>

      <em>{{pdfJson.data.pdf.pages[3].text_segments[1].title}}</em><br><br>
      <em>{{pdfJson.data.pdf.pages[3].text_segments[2].title}}</em><br><br>
      <em>{{pdfJson.data.pdf.pages[3].text_segments[3].title}}</em><br><br>
      <em>{{pdfJson.data.pdf.pages[3].text_segments[4].title}}</em><br><br>


      {{pdfJson.data.pdf.pages[3].tables[0].csv}}.<br><br>
      {{pdfJson.data.pdf.pages[3].tables[1].csv}}.<br><br>
    </p><!--end paragraph-->

  </div><!-- end page-->

    <div class="page2">
    <p id="paragraph">

      <span class="h2"><strong>{{pdfJson.data.pdf.pages[4].text_segments[4].title}}</strong></span><br><br>

      {{pdfJson.data.pdf.pages[4].tables[0].csv}}.<br><br><br>


      <span class="h2"><strong>{{pdfJson.data.pdf.pages[6].text_segments[4].title}}</strong></span><br><br>

      {{pdfJson.data.pdf.pages[6].tables[0].csv}}.<br><br>

    <span class="h2"><strong>{{pdfJson.data.pdf.pages[7].text_segments[1].title}}</strong></span><br><br>
      {{pdfJson.data.pdf.pages[7].tables[0].csv}}<br><br>

      <span class="h2"><strong>{{pdfJson.data.pdf.pages[8].text_segments[1].title}}</strong></span><br><br>

      {{pdfJson.data.pdf.pages[8].tables[0].csv}}<br><br>

    <span class="blueBold"><strong>{{pdfJson.data.pdf.pages[9].text_segments[0].title}}</strong></span><br><br>
      {{pdfJson.data.pdf.pages[9].tables[0].csv}}<br><br>
      {{pdfJson.data.pdf.pages[10].tables[0].csv}}<br><br><br>

      <span class="blueBold"><strong>{{pdfJson.data.pdf.pages[11].text_segments[0].title}}</strong></span><br><br>
      {{pdfJson.data.pdf.pages[11].tables[0].csv}}<br><br>
    </p>
  </div><!-- end page-->
  </div>

    <div class="page_editor">
      <p id="paragraph">
      <div class="my-form">
      <p>
        <label for="name">Page Title </label>
        <span class="wrap">
      <input type="text" name="your-name" v-model="pdfJson.data.pdf.pages[0].text_segments[0].title" size="40" class="form-control text" id="name"/>
    </span>
      </p>
      <p>
        <label for="e-mail">Section 1</label>
        <span class="wrap">
      <input type="text" name="your-e-mail" v-model="pdfJson.data.pdf.pages[1].text_segments[0].title" size="40" class="form-control text" id="e-mail"/>
    </span>
      </p>
      <p>
        <label for="message">Main Text 1</label>
        <span class="wrap">
      <textarea name="your-message" cols="40" rows="10" v-model="pdfJson.data.pdf.pages[1].tables[0].csv" class="textarea" id="message" aria-invalid="false"></textarea>
    </span>
      </p>
      <p>
        <label for="message">Main Text 2</label>
        <span class="wrap">
      <textarea name="your-message" cols="40" rows="10" class="textarea" v-model="pdfJson.data.pdf.pages[2].tables[0].csv" id="message" aria-invalid="false"></textarea>
    </span>
      </p>
    </div>
    </div>
  </div>
</template>

<script lang="ts">
import {mapGetters } from 'vuex';
import { Component, Vue,  Watch } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src


@Component({
  components: {
    HelloWorld,
  },
  computed: {
    ...mapGetters({
      pdfJson: 'getJson',
    }),
  },
})
export default class Home extends Vue {

  public pdfJson!: {} | ''; // <- for static type checking


  @Watch('update_json_prop')

 public update_json_prop($val: any[], $oldVal: any) {
    this.pdfJson = $val;
  }

}
</script>

<style lang="sass">
  @import  '../assets/init.sass'
</style>
