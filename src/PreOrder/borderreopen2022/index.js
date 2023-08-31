

const gift_1 = document.querySelector('#gift_1');
const gift_2 = document.querySelector('#gift_2');
const gift_3 = document.querySelector('#gift_3');
const main_act_block_cn = document.querySelector('#main_act_block_cn');
const main_act_block_en = document.querySelector('#main_act_block_en');

function to(toEl) {
    let bridge = toEl;
    let body = document.body;
    let height = 0;

    do {
        height += bridge.offsetTop;
        bridge = bridge.offsetParent;
    } while (bridge !== body)

    window.scrollTo({
        top: height,
        behavior: 'smooth'
    })
}

document.getElementById('main_2_img_1').addEventListener('click', function () {
    to(gift_1);
});
document.getElementById('main_2_img_2').addEventListener('click', function () {
    to(gift_2);
});
document.getElementById('main_2_img_3').addEventListener('click', function () {
    to(gift_3);
});

if (location.hash === 'main_act_block_cn') {
    to(main_act_block_cn);
}
if (location.hash === 'main_act_block_en') {
    to(main_act_block_en);
}
const main_act = document.getElementById('main_act');
const main_act_btn = document.getElementById('main_act_btn');
const main_act_close_btn = document.getElementById('main_act_close_btn');
const table = document.getElementById('table')
let main_act_height = main_act.clientHeight;
main_act.style = `max-height:${table.offsetTop + table.clientHeight + main_act_btn.clientHeight}px;`;
main_act_btn.addEventListener('click', () => {
    main_act.style = `max-height:${main_act_height}px;`;
    window.scrollTo({
        top: window.pageYOffset + 500,
        behavior: 'smooth'
    });
    main_act_btn.style.display = 'none';
    main_act_close_btn.style.display = 'flex';
});
main_act_close_btn.addEventListener('click', () => {
    main_act.style = `max-height:${table.offsetTop + table.clientHeight + main_act_btn.clientHeight}px;`;
    main_act_btn.style.display = 'flex';
    main_act_close_btn.style.display = 'none';
});
