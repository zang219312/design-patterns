import StateMachine from 'javascript-state-machine'
import $ from 'jquery'
const fsm = new StateMachine({
  init: '收藏',
  transitions: [
    {
      name: 'doStore',
      from: '收藏',
      to: '取消收藏'
    },
    {
      name: 'deleteStore',
      from: '取消收藏',
      to: '收藏'
    }
  ],
  methods: {
    onDoStore() {
      console.log('收藏成功')
      updateText()
    },
    onDeleteStore() {
      console.log('已取消')
      updateText()
    }
  }
})

const btn = $('#btn1')

btn.on('click', () => {
  if (fsm.is('收藏')) {
    fsm.doStore()
  } else {
    fsm.deleteStore()
  }
})
function updateText() {
  btn.text(fsm.state)
}

updateText()
