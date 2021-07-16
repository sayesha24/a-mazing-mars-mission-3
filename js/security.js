class Security {

    constructor(){

       
        this.access1 = createInput("Code1")
        this.access1.position(100,240);
        this.access1.style('background', 'pink');  
        //this.access1.style('height', '30px');
        this.access1.style('font-size', '20px')
        //this.access1.visible= false;

        this.button1 = createButton('Check');
        this.button1.position(100,280);
        this.button1.style('background', 'yellow');   
        this.button1.style('font-size', '18px'); 
        //this.button1.visible= false;

        this.access2 = createInput("Code1")
        this.access2.position(740, 440);
        this.access2.style('background', 'pink');  
        this.access2.style('font-size', '20px');
       // this.access2.visible= false;

        this.button2 = createButton('Check');
        this.button2.position(800, 475);
        this.button2.style('background', 'yellow');
        this.button2.style('font-size', '18px'); 
        //this.button2.visible= false;

//add code for creating and positioning the third input box and button

        this.access3= createInput("Code1");
        this.access3.position(1100, 240);
        this.access3.style('background', 'pink'); 
        this.access3.style('font-size', '20px');
        //this.access3.visible= false; 

        this.button3 = createButton('Check');
        this.button3.position(1100, 280);
        this.button3.style('background', 'yellow'); 
        this.button3.style('font-size', '18px'); 
        //this.button3.visible= false;  

        
        //ab= [this.access1, this.access2, this.access3, this.button1, this.button2, this.button3];
        
    }

    display(){

        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                text("CORRECT!", 200, 200);
            }
        });

        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                text("AWSOME!", 300, 200);
            }
        });
//add code for what happens when the third button is pressed

this.button3.mousePressed(() => {
    if(system.authenticate(accessCode3,this.access3.value())){
        this.button3.hide();
        this.access3.hide();
        text("AMAZING!", 400, 200);
        
    }
});
        

    }

   // beHid(){

  

     //   this.access1.hide();
       // this.button1.hide();
      //  this.access2.hide();
      //  this.button2.hide();
      //  this.access3.hide();
      //  this.button3.hide();


    
    //}
}