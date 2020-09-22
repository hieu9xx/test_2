var text = document.getElementById('text_user');

    
    function query() {
        if (1 <text.value && text.value < 11) {
            alert('Bạn đã nhập đúng yêu cầu!!!')
            for (let i = 1; i < 4; i++) {
               
            random = Math.floor(Math.random() * 10) + 1;
            console.log(random);
            alert('Con số may mắn là:' + " " + random)
            if (text.value == random) {
                alert('Bạn đã dự đoán đúng')
            } else {
                alert('Bạn đã dự đoán sai!')
               
            }
            var luot = 0;
            luot +=  i;
            alert('Lượt chơi thứ'+ ' '+luot)
            }
        } else {
            alert('Ký tự của bạn không hợp lệ! Mời Nhập lại')
        }
        
    }
    
