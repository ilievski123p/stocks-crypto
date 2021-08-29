<template>
    <div>
        <div>
            <graph-area
                    :height="500"
                    :axis-full-mode="true"
                    :shape="'normal'"
                    :opacity="0.6"
                    :borderline="true"
                    :labels="[ '10-10-2020', '10-02-2021', '10-05-2021', '10-08-2021' ]"
                    :values="val">
                <legends :names="[ 'Lowest Price', 'Highest Price', 'Closed Price', 'Opened Price' ]"></legends>
                <guideline :tooltip-y="true"></guideline>
            </graph-area>
        </div>
    </div>
</template>
<script>
export default {
    props:['times'],
    data(){
        return{
        values: [
            [ 10, 5, 5, 5 ],
            [ 40, 10, 10, 10 ],
            [ 30, 30, 30, 30 ],
            [100, 20, 40, 60 ]

        ],
        val: []
        }
    },
    mounted(){
    if (this.times)
        this.times.forEach(element => {
            this.val.push([
                element.l,
                element.h,
                element.c,
                element.o
            ])
        });
    else
        this.val = this.values
    }
}
</script>