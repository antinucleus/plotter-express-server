filename=$1
detailLevel=$2
extension=${filename##*.}
convert ${filename} -canny 0x1+10%+${detailLevel}% -negate out.${extension}
convert out.${extension} /home/oxygen/Desktop/PlotterController/plotter-express-server/public/result.svg
rm out.${extension}