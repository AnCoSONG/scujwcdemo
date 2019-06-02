<template>
  <div class="wrap">
    <el-row>
      <el-col :span="16" :offset="4">
        <el-page-header @back="goBack" :content="course_name"></el-page-header>

        <el-table :data="students" v-loading="tableLoading">
          <el-table-column prop="name" label="姓名"></el-table-column>
          <el-table-column prop="sid" label="学号"></el-table-column>
          <el-table-column prop="institute" label="学院"></el-table-column>
          <el-table-column label="成绩">
            <template slot-scope="scope">
              <!-- <el-button>黑</el-button> -->
              <el-input v-model.number="scope.row.score" type="text" :disabled="!changeScore"></el-input>
            </template>
          </el-table-column>
          <!-- <el-table-column prop="score" label="成绩" v-if="!changeScore"></el-table-column> -->
          <el-table-column label="操作" v-if="!changeScore">
            <template slot-scope="scope">
              <el-button @click="change" size="small">录入成绩</el-button>
            </template>
          </el-table-column>
          <el-table-column label="确认" v-else>
            <template slot-scope="scope">
              <el-button @click.native.prevent="confirm" size="small">确认</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
const cnts = {
  107061050: [
    {
      name: "宋老板",
      sid: 2017141463103,
      institute: "软件学院",
      score: 60
    },
    {
      name: "草老板",
      sid: 2017141463102,
      institute: "软件学院",
      score: 100
    },
    {
      name: "孙老板",
      sid: 2017141463103,
      institute: "软件学院",
      score: 60
    },
    {
      name: "刘老板",
      sid: 2017141463102,
      institute: "软件学院",
      score: 33
    },
    {
      name: "张老板",
      sid: 2017141463103,
      institute: "软件学院",
      score: 98
    },
    {
      name: "姜老板",
      sid: 2017141463102,
      institute: "软件学院",
      score: 65
    },
    {
      name: "侯老板",
      sid: 2017141463102,
      institute: "软件学院",
      score: 77
    },
    {
      name: "涂老板",
      sid: 2017141463102,
      institute: "艺术学院",
      score: 100
    }
  ],
  311040020: [
    {
      name: "宋老板",
      sid: 2017141463103,
      institute: "软件学院",
      score: 90
    },
    {
      name: "曹老板",
      sid: 2017141463102,
      institute: "软件学院",
      score: 100
    }
  ],
  311252010: [
    {
      name: "宋老板",
      sid: 2017141463103,
      institute: "软件学院",
      score: 90
    },
    {
      name: "曹老板",
      sid: 2017141463102,
      institute: "软件学院",
      score: 100
    }
  ]
};
export default {
  name: "",
  data() {
    return {
      course_no: "",
      course_name: "",
      students: [],

      changeScore: false,
      tableLoading: false
    };
  },

  created() {
    this.teacherName = this.$route.params.teachername;
    this.tid = this.$route.params.tid;
    this.course_name = this.$route.params.course_name;
    this.course_no = this.$route.params.course_no;
    // if(this.course_name == null || this.course_name == ''){
    //     this.$message('错误，5s内返回首页')
    //     setTimeout(_=>{
    //         this.$router.push('/');
    //     })
    // }
    this.students = cnts[this.course_no];
  },

  methods: {
    goBack() {
      this.$router.go(-1);
    },

    showScope(scope) {
      console.log(scope);
    },
    confirm() {
      this.tableLoading = true;
      setTimeout(_ => {
        this.changeScore = false;
        console.log("change done");
        console.log(this.changeScore);
        this.tableLoading = false;
      }, 500);
    },
    change() {
      this.changeScore = true;
      console.log("change begin");
      console.log(this.changeScore);
    }
  }
};
</script>

<style scoped>
</style>
