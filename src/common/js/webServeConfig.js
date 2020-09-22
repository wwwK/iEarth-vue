define(function () {
    var SORT_NUM = 1;
    var Config = {
        TitleKeyMap: {
            // vue config
            'image': '珠峰地形影像',
            "srtm_54_07%40zhufeng": '珠峰地形影像',
            'Tree@CBD': 'CBD',
            'Lake@CBD': 'CBD',
            'Ground_1@CBD': 'CBD',
            'Building@CBD': 'CBD',
            "Ground_Daolu@CBD": 'CBD',
            "Ground_qiao@CBD": 'CBD',
            "Config": "索菲亚大教堂",
            "局部数据_Model@广州局部面": '矢量',
            "wireFrame": "BIM建筑",
            "POINTCLOUD23": "点云",
            "model": "体数据",
            "five@vector (2)": '矢量专题图',
            "Point2D_1000_3000": '柱状',
            "Point2D_min_1000": '柱状',
            "Point2D_10000_max": '柱状',
            "Point2D_5000_10000": '柱状',
            "Point2D_3000_5000": '柱状',
            "分层分户": "分层分户",
            '科技园': '科技园',
            "城市设计": "城市设计"
        },
        CAMERA_PARAM: {
            '科技园': {
                Cartesian3: { x: -2418298.345419565, y: 5377152.887300253, z: 2433175.316684532 },
                heading: 4.8176854271927825,
                pitch: -0.3323052296889355,
                roll: 1.48903112062726e-11
            },
            '萨尔茨堡火车站': {
                Cartesian3: { x: 4173301.2396020144, y: 965626.4033609143, z: 4727051.679426561 },
                heading: 1.5705568624210677,
                pitch: -0.5949347781080299,
                roll: 2.72473599238765e-10
            },
            'BIM建筑': {
                Cartesian3: {x: -2118847.3181865294, y: 4442035.993124991, z: 4057060.266933217},
                heading: 4.033336171294838,
                pitch: -0.42452565776774165,
                roll: 1.3626433315039321e-11
            },
            'CBD': {
                Cartesian3: { x: -2180311.9545472134, y: 4380935.491489179, z: 4091551.732735441 },
                heading: 6.240726986091157,
                pitch: -0.4564392939641406,
                roll: 6.283185307179501
            },
            '点云': {
                Cartesian3: { x: -3726950.8178392285, y: 3087276.1287523108, z: 4154724.882310502 },
                heading: 3.769049490696352,
                pitch: 0.014489436405058065,
                roll: 6.283185307179586
            },
            '索菲亚大教堂': {
                Cartesian3: { x: -2653915.6463913363, y: 3571045.726807149, z: 4570293.566342328 },
                heading: 2.1953426301495345,
                pitch: -0.33632707158103625,
                roll: 6.283185307179586
            },
            '鸟巢': {
                Cartesian3: { x: -2172727.1327970685, y: 4377625.782859447, z: 4098783.828534335 },
                heading: 5.86627559202018,
                pitch: -0.2796122953540934,
                roll: 2.2601476246109087e-10
            },
            '矢量': {
                Cartesian3: { x: -2322604.3037671307, y: 5386285.275047991, z: 2505308.540418011 },
                heading: 6.123346664257511,
                pitch: -0.42306371995295966,
                roll: 6.590283874174929e-13
            },
            '珠峰地形影像': {
                Cartesian3: { x: 290799.3584088167, y: 5654922.6616128925, z: 2964895.841345586 },
                heading: 6.205059658932406,
                pitch: -0.4335396082759968,
                roll: 9.618661422905461e-10
            },
            '体数据': {
                Cartesian3: { x: -2598276.5264489097, y: 4230698.094577965, z: 4004349.9225157197 },
                heading: 1.8453000000000017,
                pitch: -0.13449999999999784,
                roll: 6.2831853071795845
            },
            '分层分户': {
                Cartesian3: { x: -2387685.5300606918, y: 4546843.024531732, z: 3782446.1843654616 },
                heading: 3.5848126302038947,
                pitch: -0.38864153252552613,
                roll: 0.000004955793702521305
            },
            '矢量专题图': {
                Cartesian3: { x: -1840638.2164070818, y: 5440707.009547237, z: 3096252.0955017423 },
                heading: 0.0684063790375351,
                pitch: -0.5451854578135471,
                roll: 6.283185307179586
            },
            '柱状': {
                Cartesian3: { x: -4128321.973614205, y: 2889588.810117088, z: -3912590.634992541 },
                heading: 4.707156513009547,
                pitch: -0.41235417870811397,
                roll: 0.0035480416143034432
            },
            "城市设计": {
                Cartesian3: { x: 115.00022575830863, y: 39.009956534844858, z: 500 },
                heading: 1.705646,
                pitch: -0.499956,
                roll: 0.0
            }
        }
    };
    return Config;
});

















