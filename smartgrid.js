module.exports = {
    columns: 12,
    offset: "2rem",
    mobileFirst: true,
    container: {
        maxWidth: "1920px",
        //fields: "1%" //внутренние отступы контейнера Внимание! fields обязан быть >= offset / 2
        fields: "1rem" //внутренние отступы контейнера Внимание! fields обязан быть >= offset / 2
    },
    breakPoints: {
        xxl: {
            width: "1400px",
        },
        xl: {
            width: "1200px",
        },
        lg: {
            width: "992px"
        },
        md: {
            width: "768px"
        },
        sm: {
            width: "576px"
        },
        xs: {
            width: "320px"
        }
    },
    // mixinNames: {
    //     container: "wrapper",
    //     row: "row-flex",
    //     rowFloat: "row-float",
    //     rowInlineBlock: "row-ib",
    //     rowOffsets: "row-offsets",
    //     column: "col",
    //     size: "size",
    //     columnFloat: "col-float",
    //     columnInlineBlock: "col-ib",
    //     columnPadding: "col-padding",
    //     columnOffsets: "col-offsets",
    //     shift: "shift",
    //     from: "from",
    //     to: "to",
    //     fromTo: "from-to",
    //     reset: "reset",
    //     clearfix: "clearfix",
    //     debug: "debug",
    //     uRowFlex: "u-row-flex",
    //     uColumn: "u-col",
    //     uSize: "u-size"
    // },
    // tab: "    ",
    // defaultMediaDevice: "screen",
    // defaultMediaDevice: " ",
    // detailedCalc: false
};