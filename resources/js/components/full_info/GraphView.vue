<template>
    <div>
        <div>
            <graph-area
                    :height="500"
                    :axis-full-mode="true"
                    :shape="'normal'"
                    :opacity="0.6"
                    :borderline="true"
                    :labels="[ '1Q', '2Q', '3Q', '4Q' ]"
                    :values="values">
                <note :text="'Data for the past two months'"></note>
                <legends :names="[ 'Lowest Price', 'Highest Price', 'Closed Price', 'Opened Price' ]"></legends>
                <guideline :tooltip-y="true"></guideline>
            </graph-area>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
        values: [
            [ 10, 5, 5, 5 ],
            [ 40, 10, 10, 10 ],
            [ 30, 30, 30, 30 ],
            [100, 20, 40, 60 ]

        ]
        }
    }
}
</script>