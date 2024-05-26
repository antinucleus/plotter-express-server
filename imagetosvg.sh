filename=$1
extension=${filename##*.}
convert ${filename} -canny 0x1+10%+30% -negate out.${extension}
convert out.${extension} /home/oxygen/Desktop/PlotterController/plotter-express-server/public/result.svg
rm out.${extension}