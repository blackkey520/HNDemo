import { delay } from '../utils'

export const loadchecklist = async () => {
  await delay(2000)
  return [
    {'TaskName':'普通发文编号','TaskID':'1','IsPressing':true},
    {'TaskName':'2017年12月31日收文','TaskID':'2','IsPressing':false},
    {'TaskName':'张雷请假申请','TaskID':'3','IsPressing':false},
    {'TaskName':'陈赓请假申请','TaskID':'4','IsPressing':false},
    {'TaskName':'关于安全设备选型通知','TaskID':'5','IsPressing':false},
    {'TaskName':'关于项目实施','TaskID':'6','IsPressing':false},
    {'TaskName':'天然橡胶无氨环保加工项目环境影响批复','TaskID':'7','IsPressing':false},
    {'TaskName':'排污许可证发放','TaskID':'8','IsPressing':false},
    {'TaskName':'建设项目竣工环境保护延期验收许可','TaskID':'9','IsPressing':false},
    {'TaskName':'销售和使用射线装置许可审批','TaskID':'10','IsPressing':false},
    {'TaskName':'环境验收批复','TaskID':'11','IsPressing':false},
    {'TaskName':'环境督查通报','TaskID':'12','IsPressing':false},
    {'TaskName':'秸秆焚烧专项整治项目通报','TaskID':'13','IsPressing':false},
  ]
}
