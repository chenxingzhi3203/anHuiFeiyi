<template>
    <div class="hello">
        <div class="back"> <el-button type="primary" @click="handleClickBack">返回</el-button> </div>

        <el-tabs v-model="activeName" type="card" class="demo-tabs" @tab-click="handleClick">
            <el-tab-pane name="first">
                <template #label>
                    <span class="custom-tabs-label">
                        <el-icon color="#409efc" class="no-inherit">
                            <Reading />
                        </el-icon>
                        <span>{{ curIntangibleCulturalHeritage }}简介</span>
                    </span>
                </template>
                <div class="curTitle"> {{ curIntangibleCulturalHeritage }}</div>
                <div class="left"> {{ introduceData }} </div>
            </el-tab-pane>
            <el-tab-pane name="second">
                <template #label>
                    <span class="custom-tabs-label">
                        <el-icon color="#409efc" class="no-inherit">
                            <User />
                        </el-icon>
                        <span>传承人</span>
                    </span>
                </template>

                <div class="left"> {{ inheritorData }} </div>
            </el-tab-pane>
            <el-tab-pane name="third">
                <template #label>
                    <span class="custom-tabs-label">
                        <el-icon color="#409efc" class="no-inherit">
                            <Camera />
                        </el-icon>
                        <span>图片</span>
                    </span>
                </template>
                <div class="card_wrap">

                    <!-- vue的遍历，目的是创造data.length个数的card -->
                    <div class="c_item" v-for="(imgurl, index) in imgs" :key="index">
                        <div class="c_item"
                            :style="{ backgroundImage: 'url(' + imgurl + ')', backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat' }">
                            <span class="imgDes"> {{ index + 1 }} </span>
                        </div>

                    </div>
                </div>

            </el-tab-pane>
            <el-tab-pane name="fourth">
                <template #label>
                    <span class="custom-tabs-label">
                        <el-icon color="#409efc" class="no-inherit">
                            <Brush />
                        </el-icon>
                        <span>制造工艺</span>
                    </span>
                </template>

                <el-alert title="本工艺仅供参考，实际加工技艺请与非遗传承人进行确认" type="success" :closable="false" />

                <el-timeline style="max-width: 600px;position: relative;margin: auto;">

                    <!-- 制作工艺的遍历 -->

                    <el-steps class="mb-4" style="max-width: 600px" :space="100" :active="1" direction="vertical">
                        <el-step v-for="(steps, index) in technicalStep" :title="gernerateTitle(index)" :icon="Edit"
                            :key="index" :description="steps"></el-step>
                    </el-steps>
                </el-timeline>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { Edit, Picture, UploadFilled } from '@element-plus/icons-vue'
import introduceInfo from '@/assets/detailData/introduce.js';
import inheritor from '@/assets/detailData/inheritor.js';
import imgs from '@/assets/detailData/imgs.js';
import technicalStepS from '@/assets/detailData/steps'
export default {
    name: "DetailView",
    components: {

    },

    mounted() {
        const route = useRoute(); // 引入 Route
        this.curIntangibleCulturalHeritage = route.query.name
        this.introduceData = introduceInfo[route.query.name]
        this.inheritorData = inheritor[route.query.name]
        this.imgs = imgs[route.query.name]
        this.technicalStep = technicalStepS[route.query.name]
    },
    data() {
        return {
            activeName: 'first',//默认打开的Tab页
            curIntangibleCulturalHeritage: '',//当前非遗的名称
            introduceData: '',//简介
            inheritorData: '',//传承人
            imgs: [],//图片
            technicalStep: [],
            Edit: Edit,
            Picture: Picture, UploadFilled: UploadFilled
        };
    },

    methods: {
        handleClick() {
            console.log(' handleClick')
        },
        handleClickBack() {
            //返回上一页
            window.history.back()
        },
        gernerateTitle(indexVal) {
            const flag = indexVal + 1
            return '步骤' + flag
        }
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.back {
    display: inline-block;
    float: right;
    position: relative;
    z-index: 10;
}

.no-inherit {
    margin: 4px
}

.card_wrap {
    width: 98%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
}

.c_item {
    flex: 1;
    height: 400px;
    margin: 0 5px 5px 0;
    background-color: #fff;
    width: calc((100vw - 80px) / 2);

    &:nth-child(2n) {
        margin-right: 0;
    }
}

.imgDes {
    border-radius: 8px 0 8px 8px;
    color: #fff;
    padding: 0 4px;
    background-color: #00dcff;
}

.store {
    zoom: 1;
    clear: both;
    margin-bottom: 8px;
    margin-left: -20px;
}

ul {
    list-style: none;
}

li {

    height: 150px;
    background-color: #e4ebea;
    margin: 10px 0;
}

.peerStore {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.left {
    text-align: left;
}

.curTitle {
    font-weight: 700;
    font-size: 20px;
}

:deep(.el-step .el-step__description) {
    font-size: 20px;
}

:deep(.el-step__description.is-wait) {
    color: var(--el-text-color-primary);
}

:deep(.el-step__title.is-wait) {
    color: var(--el-text-color-primary);
    font-weight: bold;
}


:deep(.el-step__icon-inner[class*=el-icon]:not(.is-status)) {
    font-size: 25px;
    font-weight: normal;
    color: var(--el-text-color-primary);
}
</style>