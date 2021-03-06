module.exports = function() {
  new FWDSimple3DCoverflow({
    coverflowHolderDivId: "flow",
    coverflowDataListDivId: "flow-data",
    displayType:"fluidwidth",
    autoScale:"yes",
    showCategoriesMenu: "no",
    coverflowWidth:500,
    coverflowHeight:538,
    mainFolderPath:"/assets/coverflow",
    skinPath:"skin_white",

    //main settings
    backgroundColor:"#fff",
    backgroundImagePath:"",
    backgroundRepeat:"repeat-x",
    showDisplay2DAlways:"no",
    coverflowStartPosition:"center",
    coverflowTopology:"dualsided",
    coverflowXRotation:0,
    coverflowYRotation:0,
    numberOfThumbnailsToDisplayLeftAndRight:"all",
    infiniteLoop:"yes",
    rightClickContextMenu:"default",
    useDragAndSwipe:"no",
    fluidWidthZIndex:1000,

    thumbnailWidth:400,
    thumbnailHeight:266,
    thumbnailXOffset3D:86,
    thumbnailXSpace3D:78,
    thumbnailZOffset3D:200,
    thumbnailZSpace3D:93,
    thumbnailYAngle3D:70,
    thumbnailXOffset2D:20,
    thumbnailXSpace2D:30,
    thumbnailHoverOffset:100,
    thumbnailBorderSize:0,
    thumbnailBackgroundColor:"none",
    thumbnailBorderColor1:"none",
    thumbnailBorderColor2:"none",
    transparentImages:"no",
    thumbnailsAlignment:"center",
    maxNumberOfThumbnailsOnMobile:13,
    showThumbnailsGradient:"yes",
    thumbnailGradientColor1:"rgba(255, 255, 255, 0)",
    thumbnailGradientColor2:"rgba(255, 255, 255, 1)",
    showText:"no",
    textOffset:10,
    showThumbnailBoxShadow:"no",
    showTooltip:"no",
    dynamicTooltip:"yes",
    showReflection:"no",
    reflectionHeight:60,
    reflectionDistance:0,
    reflectionOpacity:.4
  });
}
