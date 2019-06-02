<template>
  <div class="wrap" v-loading="pageLoading">
    <el-button type="primary" round>教师信息</el-button>

    <el-row>
      <el-col :span="6" :offset="9">
        <div class="teacher-info">
          <div class="name">{{name}}</div>
          <div class="tid">{{tid}}</div>
        </div>
      </el-col>
    </el-row>
    <el-button type="primary" round>授课信息</el-button>
    <el-row>
      <el-col :span="20" :offset="2">
        <el-table
          :data="courseData.filter(data => !search || data.course_name.toLowerCase().includes(search.toLowerCase()))"
          style="width: 100%"
          v-loading="loadingTable"
        >
          <el-table-column label="课程号" prop="course_no" width="150" show-overflow-tooltip></el-table-column>
          <el-table-column label="课程名" prop="course_name" width="300" show-overflow-tooltip></el-table-column>
          <el-table-column label="学分" prop="credit" width="100" show-overflow-tooltip></el-table-column>
          <el-table-column label="上课信息" prop="course_info" width="300" show-overflow-tooltip></el-table-column>
          <el-table-column align="right">
            <template slot="header" slot-scope="scope">
              <el-input v-model="search" size="mini" placeholder="输入课程名搜索"/>
            </template>
            <template slot-scope="scope">
              <el-button size="mini" @click="moveToDetail(scope.row)">查看学生名单</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import global from "../data";
const tidToName = {
  2010141423122: "王鹏",
  2010141423123: "刘强",
  2010141423124: "王强",
  2010141423125: "宋强",
  2010141423126: "郭强"
};
export default {
  name: "",
  data() {
    return {
      pageLoading: false,
      scoreLoading: false,

      msg: "教师页面",

      name: "王鹏",
      tid: "2011141490909",
      gender: "man",
      institute_no: 63,
      institute: "软件学院",

      //搜索
      courseData: [],
      search: "",
      loadingTable: false,

      //课表信息
      dialogTableVisible: false,

      changeCourseVisible: false,
      changingScore: false
    };
  },

  methods: {
    setCourseScore(index, row) {
      console.log(row);
      this.changeCourseVisible = true;
    },

    confirmScore() {
      this.scoreLoading = true;
      setTimeout(_ => {
        this.changeScore = false;
        this.scoreLoading = false;
      }, 500);
    },
    moveToDetail(row) {
      this.$router.push({
        name: "detail",
        params: {
          course_name: row.course_name,
          course_no: row.course_no,
          tid: this.tid,
          teachername: this.name
        }
      });
    },
    changeScore(index, row) {}
  },

  created() {
    if (this.$route.params.account) {
      this.tid = this.$route.params.account;
      this.name = tidToName[this.$route.params.account];
      global.name = this.name;
      global.tid = this.tid;
    } else {
      this.tid = global.tid;
      this.name = global.name;
    }

    //赋值课表
    this.loadingTable = true;
    setTimeout(_ => {
      this.courseData = [
        {
          course_no: 107061050,
          course_name: "毛泽东思想和中国特色社会主义理论体系概论",
          credit: 5,
          course_info: "1-17周 星期二 19:20-21:55 综C 305"
        },
        {
          course_no: 311040020,
          course_name: "数字图像处理",
          credit: 5,
          course_info: "9-16周 星期二 19:20-21:55 一教 A211"
        },
        {
          course_no: 311252010,
          course_name: "AI面向语言编程",
          credit: 5,
          course_info: "1-8周 星期二 16:45-18:25 一教A207"
        }
      ];
      this.loadingTable = false;
    }, 1000);
  }
};
</script>

<style scoped>
.wrap {
  min-width: 1300px;
}
.teacher-img {
  width: 128px;
  height: 128px;
  background-image: url(../assets/user.png);
  background-repeat: no-repeat;
  background-size: contain;
}

.teacher-info {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  flex-direction: row;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 20px 0;

  transition: all 0.5s;
  border-radius: 10px;
  background-color: white;
  padding: 20px;
  overflow: hidden;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
}
</style>
