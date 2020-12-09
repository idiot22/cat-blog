<template>
    <div class="icon-btn-wraper">
        <a href="javascript:;" v-if="btnType === 'extend'">
            <div class="icon-btn-wraper1">
                <div class="heng"></div>
            </div>
        </a>
        <a href="javascript:;" v-if="btnType === 'scale'">
            <div class="icon-btn-wraper2">
                <div class="heng"></div>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    props: {
        btnType:{
            default: 'extend',
            required: true
        }
    }
}
</script>

<style lang='scss' scoped>
.icon-btn-wraper{
    display: inline-block;
}
.icon-btn-wraper1{
    width: 50px;
    height: 50px;
    position: relative;
    &:hover{
        .heng{
            &::before{
                transform: rotate(90deg);
            }
            &::after{
                transform: rotate(90deg);
            }
        }
    }
    .heng{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 20px;
        height: 2px;
        background: #53555c;
        transition: all 0.3s cubic-bezier(0, 0.99, 0.2, 1);
        &::before,&::after{
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background: #53555c;
          transition: all 0.3s cubic-bezier(0, 0.99, 0.2, 1);
        }
        &::before{
            transform: translateY(300%);
        }
        &::after{
            transform: translateY(-300%);
        }
    }
}
.icon-btn-wraper2{
    width: 50px;
    height: 50px;
    position: relative;
    &:hover{
        .heng{
            &::before{
                transform: rotate(0deg);
            }
            &::after{
                transform: rotate(0deg);
            }
        }
    }
    .heng{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 20px;
        height: 2px;
        transition: all 0.3s cubic-bezier(0, 0.99, 0.2, 1);
        &::before,&::after{
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background: #53555c;
          transition: all 0.3s cubic-bezier(0, 0.99, 0.2, 1);
        }
        &::before{
            transform: rotate(45deg);
        }
        &::after{
            transform: rotate(-45deg);
        }
    }
}
</style>