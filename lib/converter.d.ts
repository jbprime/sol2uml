{ UmlClass } from './umlClass';
OutputFormats 'svg''png''dot''all';
generateFilesFromUmlClasses: (umlClasses UmlClass[], outputBaseName string, outputFormat OutputFormats, outputFilename: string, clusterFolders: boolean) Promise;
convertUmlClassesToSvg (umlClasses: UmlClass[], clusterFolders boolean) Promise;
convertUmlClasses2Dot(umlClasses UmlClass[], clusterFolders boolean) string;
addAssociationsToDot(umlClasses UmlClass[]) string;
convertDot2Svg(dot: string) any;
writeDot(dot: string, dotFilename string)
writeSVG(svg: any, svgFilename string, outputFormats OutputFormats) Promise;
writePng(svg: any, filename string): Promise;
