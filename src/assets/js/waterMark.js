const defaultSettings = {
  watermark_txt: 'text',
  watermark_x: 20, // 水印起始位置x轴坐标
  watermark_y: 20, // 水印起始位置Y轴坐标
  watermark_rows: 20, // 水印行数
  watermark_cols: 20, // 水印列数
  watermark_x_space: 200, // 水印x轴间隔
  watermark_y_space: 100, // 水印y轴间隔
  watermark_color: '#000000', // 水印字体颜色
  watermark_alpha: 0.1, // 水印透明度
  watermark_fontsize: '12px', // 水印字体大小
  watermark_font: '微软雅黑', // 水印字体
  watermark_width: 120, // 水印宽度
  watermark_height: 30, // 水印长度
  watermark_angle: 15, // 水印倾斜度数
}

class WaterMark {
  constructor(settings) {
    this.settings = Object.assign({}, defaultSettings, settings)
  }

  init() {
    this.destory()
    this.addWaterMark()
  }

  addWaterMark() {
    const oTemp = document.createDocumentFragment()

    // 获取页面最大宽度
    const page_width = Math.max(document.body.scrollWidth, document.body.clientWidth)
    // 获取页面最大长度
    const page_height = Math.max(document.body.scrollHeight, document.body.clientHeight)

    // 如果将水印列数设置为0，或水印列数设置过大，超过页面最大宽度，则重新计算水印列数和水印x轴间隔
    if (this.settings.watermark_cols == 0
      || (parseInt(this.settings.watermark_x
        + this.settings.watermark_width * this.settings.watermark_cols
        + this.settings.watermark_x_space * (this.settings.watermark_cols - 1))
        > page_width)) {
      this.settings.watermark_cols
        = parseInt((page_width
          - this.settings.watermark_x
          + this.settings.watermark_x_space)
          / (this.settings.watermark_width
            + this.settings.watermark_x_space))
      this.settings.watermark_x_space
        = parseInt((page_width
          - this.settings.watermark_x
          - this.settings.watermark_width
          * this.settings.watermark_cols)
          / (this.settings.watermark_cols - 1))
    }

    // 如果将水印行数设置为0，或水印行数设置过大，超过页面最大长度，则重新计算水印行数和水印y轴间隔
    if (this.settings.watermark_rows == 0
      || (parseInt(this.settings.watermark_y
        + this.settings.watermark_height * this.settings.watermark_rows
        + this.settings.watermark_y_space * (this.settings.watermark_rows - 1))
        > page_height)) {
      this.settings.watermark_rows
        = parseInt((this.settings.watermark_y_space
          + page_height - this.settings.watermark_y)
          / (this.settings.watermark_height + this.settings.watermark_y_space))
      this.settings.watermark_y_space
        = parseInt((page_height
          - this.settings.watermark_y
          - this.settings.watermark_height
          * this.settings.watermark_rows)
          / (this.settings.watermark_rows - 1))
    }

    const arr = []

    for (let i = 1; i < this.settings.watermark_rows - 1; i++) {
      const y = this.settings.watermark_y + (this.settings.watermark_y_space + this.settings.watermark_height) * i
      for (let j = 0; j < this.settings.watermark_cols; j++) {
        const x = this.settings.watermark_x + (this.settings.watermark_width + this.settings.watermark_x_space) * j

        const mask_div = document.createElement('div')
        mask_div.className = 'mask_div'
        mask_div.id = `mask_div${i}${j}`
        mask_div.appendChild(document.createTextNode(this.settings.watermark_txt))
        // 设置水印div倾斜显示
        mask_div.style.webkitTransform = `rotate(-${this.settings.watermark_angle}deg)`
        mask_div.style.MozTransform = `rotate(-${this.settings.watermark_angle}deg)`
        mask_div.style.msTransform = `rotate(-${this.settings.watermark_angle}deg)`
        mask_div.style.OTransform = `rotate(-${this.settings.watermark_angle}deg)`
        mask_div.style.transform = `rotate(-${this.settings.watermark_angle}deg)`
        mask_div.style.visibility = ''
        mask_div.style.position = 'absolute'
        mask_div.style.left = `${x}px`
        mask_div.style.top = `${y}px`
        mask_div.style.overflow = 'hidden'
        mask_div.style.zIndex = '9999'
        // mask_div.style.border="solid #eee 1px";
        mask_div.style.opacity = this.settings.watermark_alpha
        mask_div.style.fontSize = this.settings.watermark_fontsize
        mask_div.style.fontFamily = this.settings.watermark_font
        mask_div.style.color = this.settings.watermark_color
        mask_div.style.textAlign = 'center'
        mask_div.style.width = `${this.settings.watermark_width}px`
        mask_div.style.height = `${this.settings.watermark_height}px`
        mask_div.style.display = 'block'
        mask_div.style.pointerEvents = 'none'
        oTemp.appendChild(mask_div)
        arr.push(mask_div.id)
      }
    }
    document.body.appendChild(oTemp)
  }

  destory() {
    // 每次添加水印时，都先清一遍水印，防止水印多次添加
    const waterMarkArr = document.querySelectorAll('.mask_div')
    waterMarkArr.forEach((item) => {
      item.remove()
    })
  }
}

export default WaterMark
