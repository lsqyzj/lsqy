import *as echarts from 'echarts'
class mine_charts{
    static get_id_option(id){
        let obj = echarts.getInstanceById($(`#${id}`).attr("_echarts_instance_"));
        return obj.getOption();
    }
    static get_id_echarts(id,option){
        let char=echarts.init(document.getElementById(id));
        char.clear();
        option&&char.setOption(option);
        return char;
    }
    static echarts_refrsh(id,option){
        let charts = this.get_id_echarts(id,option);
        charts.resize();
    }
}
export default mine_charts