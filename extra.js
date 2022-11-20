function arrowPrevClick() {
    
    if (getwindowtype() == "laptop") {
        if(lcounter==-1 )
        {
        lcounter=testimonial.length;  
       // lcounter = checkForReset(lcounter);
        LaptopView(-1);
       lcounter=lcounter-3;
       alert(lcounter);
        }
        else
        {
            
            lcounter = checkForReset(lcounter);
            LaptopView(-1);
            lcounter=lcounter-3;

        }
    }
    else if (getwindowtype() == "tab") {
        //tcounter = tcounter - 2;
        tcounter = checkForReset(tcounter);
        tabView(-1);
    }
    else if (getwindowtype() == "mobile") {
//mcounter = mcounter - 1;
        mcounter = checkForReset(mcounter);
        mobileView(-1);
    }

}