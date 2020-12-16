<template>
  <div class="Home-container">
    <div class="container">
      <Row :gutter="24">
          <Col span="8">
              <Card>
                  <p slot="title">1.注意事项</p>
                  <p>1.同学们答题时主函数请写成int main（）{}</p>
                  <p>2.题目提交时不要加入任何的注解文字</p>
                  <p class="col-f">3.提交时c++/c/java三种语言请正确选择</p>
              </Card>
          </Col>
          <Col span="8">
              <Card>
                  <p slot="title">2.请勿抄袭来自网上或是同学的答案!</p>
                  <p>请各位坚持独立做题，杜绝抄袭行为。</p>
                  <p class="col-s">一旦被系统查重或人工查重检测出有抄袭行为，重者将失去继续竞争的资格。</p>
              </Card>
          </Col>
          <Col span="8">
              <Card>
                  <p slot="title">3.初学者常见错误,新人必入!</p>
                  <p>小朋友们,初学C语言错误主要有以下几类:</p>
                  <p>1.分号,逗号,括号用了全角汉字字符,一定要注意用英文半角</p>
                  <p>2.关键字拼写错误</p>
                  <p>3.忘写逗号,分号,单双引号之类的</p>
                  <p>诀窍:</p>
                  <p>1.认真看错误信息,看不懂就复制出来百度</p>
                  <p>2.细心细心再细心</p>
              </Card>
          </Col>
      </Row>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeContainer",
}
</script>

<style scoped>
  .col-f {
    height: 107px;
  }

  .col-s {
    height: 126px;
  }
  .container {
    width: 80%;
    margin: 0 auto;
  }
</style>