function timeoutmanager() {
    //var exittimer = setTimeout(exitwarn, 20000);

     var time = new Date().getTime();
     $(document.body).bind("mousemove keypress", function(e) {
         time = new Date().getTime();
     });

     function refresh() {
         if(new Date().getTime() - time >= 90000) 
             exitwarn();
         else 
             setTimeout(refresh, 10000);
     }

     setTimeout(refresh, 10000);

}
function reset() {
    //clearTimeout(exittimer);
    timeoutmanager();
}
function exitwarn(){
    Swal.fire({
        icon: 'warning',
        title: 'Hallo?',
        text: 'Deze sessie is al even inactief. Klik op de knop om weer te activeren.',
        showConfirmButton: true,
        confirmButtonText: 'Neen, ik ben er nog',
        timer: 10000,
        timerProgressBar: true,
        allowEnterKey: false,
        allowEscapeKey: false,
        allowOutsideClick: false,
        toast: false,
    }).then((result) => {
        if (result.value) {
         reset();
        } else if (result.dismiss === Swal.DismissReason.timer) {
            window.location.replace("../index.html");
          }
    })


   /* swal({
        title: "Are you sure?",
        text: "You will not be able to recover this imaginary file!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel plx!",
        closeOnConfirm: false,
        closeOnCancel: false
      },
      function(isConfirm){
        if (isConfirm) {
          swal("Deleted!", "Your imaginary file has been deleted.", "success");
        } else {
          swal("Cancelled", "Your imaginary file is safe :)", "error");
        }
      });*/
}
