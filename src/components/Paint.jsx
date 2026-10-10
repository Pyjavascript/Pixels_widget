// import React, { useState, useRef, useEffect, useCallback } from "react";

// // ==========================================
// // 1. CLASSIC 28-COLOR PALETTE DEFINITIONS
// // ==========================================
// const PALETTE_COLORS = [
//   "#000000",
//   "#808080",
//   "#800000",
//   "#808000",
//   "#008000",
//   "#008080",
//   "#000080",
//   "#800080",
//   "#808040",
//   "#004040",
//   "#0080ff",
//   "#004080",
//   "#8000ff",
//   "#804000",
//   "#ffffff",
//   "#c0c0c0",
//   "#ff0000",
//   "#ffff00",
//   "#00ff00",
//   "#00ffff",
//   "#0000ff",
//   "#ff00ff",
//   "#ffff80",
//   "#00ff80",
//   "#80ffff",
//   "#8080ff",
//   "#ff0080",
//   "#ff8040",
// ];

// // ==========================================
// // 2. RETRO VECTOR TOOL ICONS
// // ==========================================
// const ToolIcons = {
//   freeSelect: (
//     <svg width="16" height="16" viewBox="0 0 16 16">
//       <polygon
//         points="4,2 6,6 10,4 8,9 13,8 10,13 5,12 2,8"
//         fill="none"
//         stroke="#000"
//         strokeWidth="1"
//         strokeDasharray="1,1"
//       />
//       <polygon points="12,2 14,5 11,4" fill="#000" />
//     </svg>
//   ),
//   rectSelect: (
//     <svg width="16" height="16" viewBox="0 0 16 16">
//       <rect
//         x="2.5"
//         y="2.5"
//         width="11"
//         height="11"
//         fill="none"
//         stroke="#000"
//         strokeWidth="1"
//         strokeDasharray="2,2"
//       />
//     </svg>
//   ),
//   eraser: (
//     <svg width="16" height="16" viewBox="0 0 16 16">
//       <path
//         d="M4,10 L10,4 L14,8 L8,14 Z"
//         fill="#ffb0b0"
//         stroke="#000"
//         strokeWidth="1"
//       />
//       <path
//         d="M4,10 L8,14 L6,14 L2,10 Z"
//         fill="#ffffff"
//         stroke="#000"
//         strokeWidth="1"
//       />
//       <line x1="7" y1="7" x2="11" y2="11" stroke="#000" strokeWidth="1" />
//     </svg>
//   ),
//   fill: (
//     <svg width="16" height="16" viewBox="0 0 16 16">
//       <path
//         d="M9,2 L14,7 L9,12 L4,7 Z"
//         fill="#0080ff"
//         stroke="#000"
//         strokeWidth="1"
//       />
//       <path d="M12,5 L14,3" stroke="#808080" strokeWidth="1.5" />
//       <path d="M3,11 Q2,14 4,14 Q6,14 5,11 Z" fill="#0080ff" />
//     </svg>
//   ),
//   picker: (
//     <svg width="16" height="16" viewBox="0 0 16 16">
//       <path
//         d="M12,2 L14,4 L11,7 L10,6 L4,12 L2,14 L4,12 L5,11 L4,10 L10,4 Z"
//         fill="#ffff80"
//         stroke="#000"
//         strokeWidth="1"
//       />
//       <line x1="2" y1="14" x2="3" y2="13" stroke="#000" strokeWidth="1.5" />
//     </svg>
//   ),
//   magnifier: (
//     <svg width="16" height="16" viewBox="0 0 16 16">
//       <circle
//         cx="6.5"
//         cy="6.5"
//         r="4"
//         fill="#c0ffff"
//         stroke="#000"
//         strokeWidth="1.5"
//       />
//       <line x1="9.5" y1="9.5" x2="14" y2="14" stroke="#000" strokeWidth="2.5" />
//       <circle cx="5.5" cy="5.5" r="1.5" fill="#ffffff" />
//     </svg>
//   ),
//   pencil: (
//     <svg width="16" height="16" viewBox="0 0 16 16">
//       <path
//         d="M11,2 L14,5 L5,14 L2,14 L2,11 Z"
//         fill="#ffff00"
//         stroke="#000"
//         strokeWidth="1"
//       />
//       <polygon points="2,14 2,12 4,14" fill="#000" />
//       <line x1="9" y1="4" x2="12" y2="7" stroke="#ff8080" strokeWidth="1" />
//     </svg>
//   ),
//   brush: (
//     <svg width="16" height="16" viewBox="0 0 16 16">
//       <path
//         d="M11,2 L14,5 L8,11 L6,9 Z"
//         fill="#804000"
//         stroke="#000"
//         strokeWidth="1"
//       />
//       <path
//         d="M6,9 L8,11 L5,14 C3,14 2,13 3,11 Z"
//         fill="#0000ff"
//         stroke="#000"
//         strokeWidth="1"
//       />
//       <rect x="7" y="7" width="3" height="3" fill="#c0c0c0" />
//     </svg>
//   ),
//   airbrush: (
//     <svg width="16" height="16" viewBox="0 0 16 16">
//       <rect
//         x="6"
//         y="6"
//         width="6"
//         height="8"
//         fill="#00ff00"
//         stroke="#000"
//         strokeWidth="1"
//       />
//       <polygon
//         points="6,6 9,2 12,6"
//         fill="#c0c0c0"
//         stroke="#000"
//         strokeWidth="1"
//       />
//       <circle cx="3" cy="2" r="0.75" fill="#000" />
//       <circle cx="5" cy="1" r="0.75" fill="#000" />
//       <circle cx="2" cy="4" r="0.75" fill="#000" />
//       <circle cx="4" cy="4" r="0.75" fill="#000" />
//     </svg>
//   ),
//   text: (
//     <svg width="16" height="16" viewBox="0 0 16 16">
//       <text
//         x="3"
//         y="13"
//         fontFamily="Times New Roman, serif"
//         fontSize="14"
//         fontWeight="bold"
//         fill="#000"
//       >
//         A
//       </text>
//     </svg>
//   ),
//   line: (
//     <svg width="16" height="16" viewBox="0 0 16 16">
//       <line x1="2" y1="14" x2="14" y2="2" stroke="#000" strokeWidth="1.5" />
//     </svg>
//   ),
//   curve: (
//     <svg width="16" height="16" viewBox="0 0 16 16">
//       <path
//         d="M2,13 Q4,2 8,8 T14,3"
//         fill="none"
//         stroke="#000"
//         strokeWidth="1.5"
//       />
//     </svg>
//   ),
//   rectangle: (
//     <svg width="16" height="16" viewBox="0 0 16 16">
//       <rect
//         x="2.5"
//         y="3.5"
//         width="11"
//         height="9"
//         fill="none"
//         stroke="#000"
//         strokeWidth="1.5"
//       />
//     </svg>
//   ),
//   polygon: (
//     <svg width="16" height="16" viewBox="0 0 16 16">
//       <polygon
//         points="2,12 5,3 13,5 14,12 8,14"
//         fill="none"
//         stroke="#000"
//         strokeWidth="1.5"
//       />
//     </svg>
//   ),
//   ellipse: (
//     <svg width="16" height="16" viewBox="0 0 16 16">
//       <ellipse
//         cx="8"
//         cy="8"
//         rx="6"
//         ry="4.5"
//         fill="none"
//         stroke="#000"
//         strokeWidth="1.5"
//       />
//     </svg>
//   ),
//   roundedRect: (
//     <svg width="16" height="16" viewBox="0 0 16 16">
//       <rect
//         x="2.5"
//         y="3.5"
//         width="11"
//         height="9"
//         rx="3"
//         ry="3"
//         fill="none"
//         stroke="#000"
//         strokeWidth="1.5"
//       />
//     </svg>
//   ),
// };

// const TOOLS_CONFIG = [
//   { id: "freeSelect", name: "Free-Form Select", icon: ToolIcons.freeSelect },
//   { id: "rectSelect", name: "Select", icon: ToolIcons.rectSelect },
//   { id: "eraser", name: "Eraser/Color Eraser", icon: ToolIcons.eraser },
//   { id: "fill", name: "Fill With Color", icon: ToolIcons.fill },
//   { id: "picker", name: "Pick Color", icon: ToolIcons.picker },
//   { id: "magnifier", name: "Magnifier", icon: ToolIcons.magnifier },
//   { id: "pencil", name: "Pencil", icon: ToolIcons.pencil },
//   { id: "brush", name: "Brush", icon: ToolIcons.brush },
//   { id: "airbrush", name: "Airbrush", icon: ToolIcons.airbrush },
//   { id: "text", name: "Text", icon: ToolIcons.text },
//   { id: "line", name: "Line", icon: ToolIcons.line },
//   { id: "curve", name: "Curve", icon: ToolIcons.curve },
//   { id: "rectangle", name: "Rectangle", icon: ToolIcons.rectangle },
//   { id: "polygon", name: "Polygon", icon: ToolIcons.polygon },
//   { id: "ellipse", name: "Ellipse", icon: ToolIcons.ellipse },
//   { id: "roundedRect", name: "Rounded Rectangle", icon: ToolIcons.roundedRect },
// ];

// export default function Paint() {
//   const [canvasSize, setCanvasSize] = useState({ width: 560, height: 320 });
//   const [zoom, setZoom] = useState(1);
//   const [selectedTool, setSelectedTool] = useState("pencil");
//   const [primaryColor, setPrimaryColor] = useState("#000000");
//   const [secondaryColor, setSecondaryColor] = useState("#ffffff");

//   // Tool options
//   const [lineWidth, setLineWidth] = useState(1);
//   const [eraserSize, setEraserSize] = useState(8);
//   const [brushShape, setBrushShape] = useState("round-medium");
//   const [airbrushSize, setAirbrushSize] = useState(12);
//   const [shapeStyle, setShapeStyle] = useState("outline");
//   const [isTransparentDraw, setIsTransparentDraw] = useState(false);

//   // Typography options
//   const [textFont, setTextFont] = useState("Arial");
//   const [textSize, setTextSize] = useState(12);
//   const [textBold, setTextBold] = useState(false);
//   const [textItalic, setTextItalic] = useState(false);
//   const [textUnderline, setTextUnderline] = useState(false);
//   const [activeTextBox, setActiveTextBox] = useState(null);

//   // UI state
//   const [showToolBox, setShowToolBox] = useState(true);
//   const [showColorBox, setShowColorBox] = useState(true);
//   const [showStatusBar, setShowStatusBar] = useState(true);
//   const [showFontBox, setShowFontBox] = useState(true);

//   // Menus & Modals
//   const [openMenu, setOpenMenu] = useState(null);
//   const [activeDialog, setActiveDialog] = useState(null);
//   const [dialogState, setDialogState] = useState({ width: 560, height: 320 });

//   // Status telemetry
//   const [cursorPos, setCursorPos] = useState({ x: null, y: null });
//   const [selectionDim, setSelectionDim] = useState(null);
//   const [statusMessage, setStatusMessage] = useState("Draws a freehand line.");

//   // DOM Refs
//   const canvasRef = useRef(null);
//   const previewCanvasRef = useRef(null);
//   const fileInputRef = useRef(null);
//   const textInputRef = useRef(null);
//   const menuBarRef = useRef(null);

//   // History tracking
//   const historyRef = useRef([]);
//   const historyIndexRef = useRef(-1);
//   const [historyIndex, setHistoryIndex] = useState(-1);
//   const [historyLength, setHistoryLength] = useState(0);

//   // Drawing tracking
//   const isDrawingRef = useRef(false);
//   const startPosRef = useRef({ x: 0, y: 0 });
//   const lastPosRef = useRef({ x: 0, y: 0 });
//   const currentButtonRef = useRef(0);
//   const curveStepRef = useRef(0);
//   const curvePointsRef = useRef({ p0: null, p1: null, p2: null, p3: null });
//   const polygonPointsRef = useRef([]);
//   const lastClickTimeRef = useRef(0);

//   // Floating selection
//   const selectionRef = useRef(null);
//   const [selectionState, setSelectionState] = useState(null);
//   const isDraggingSelectionRef = useRef(false);
//   const selectionDragOffsetRef = useRef({ x: 0, y: 0 });

//   // Canvas edge resizing
//   const isResizingCanvasRef = useRef(null);
//   const resizeStartDimRef = useRef({
//     width: 560,
//     height: 320,
//     startX: 0,
//     startY: 0,
//   });

//   // Internal clipboard
//   const internalClipboardRef = useRef(null);
//   const [hasClipboard, setHasClipboard] = useState(false);

//   const hexToRgb = (hex) => {
//     let c = hex.replace("#", "");
//     if (c.length === 3)
//       c = c
//         .split("")
//         .map((x) => x + x)
//         .join("");
//     const num = parseInt(c, 16);
//     return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255, a: 255 };
//   };

//   const rgbToHex = (r, g, b) =>
//     "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

//   const getCanvasCoords = useCallback(
//     (e) => {
//       const canvas = canvasRef.current;
//       if (!canvas) return { x: 0, y: 0 };
//       const rect = canvas.getBoundingClientRect();
//       const clientX = e.clientX ?? (e.touches && e.touches[0]?.clientX) ?? 0;
//       const clientY = e.clientY ?? (e.touches && e.touches[0]?.clientY) ?? 0;
//       const x = Math.floor((clientX - rect.left) / zoom);
//       const y = Math.floor((clientY - rect.top) / zoom);
//       return {
//         x: Math.max(0, Math.min(canvas.width - 1, x)),
//         y: Math.max(0, Math.min(canvas.height - 1, y)),
//       };
//     },
//     [zoom],
//   );

//   const saveSnapshot = useCallback(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d", { willReadFrequently: true });
//     const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

//     const newHistory = historyRef.current.slice(0, historyIndexRef.current + 1);
//     newHistory.push({
//       imageData: imgData,
//       width: canvas.width,
//       height: canvas.height,
//     });

//     if (newHistory.length > 50) newHistory.shift();
//     historyRef.current = newHistory;
//     historyIndexRef.current = newHistory.length - 1;
//     setHistoryIndex(historyIndexRef.current);
//     setHistoryLength(newHistory.length);
//   }, []);

//   const restoreSnapshot = useCallback((index) => {
//     if (index < 0 || index >= historyRef.current.length) return;
//     const state = historyRef.current[index];
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     if (canvas.width !== state.width || canvas.height !== state.height) {
//       canvas.width = state.width;
//       canvas.height = state.height;
//       setCanvasSize({ width: state.width, height: state.height });
//     }

//     const ctx = canvas.getContext("2d", { willReadFrequently: true });
//     ctx.putImageData(state.imageData, 0, 0);
//     historyIndexRef.current = index;
//     setHistoryIndex(index);
//   }, []);

//   const handleUndo = useCallback(() => {
//     if (historyIndexRef.current > 0)
//       restoreSnapshot(historyIndexRef.current - 1);
//   }, [restoreSnapshot]);

//   const handleRedo = useCallback(() => {
//     if (historyIndexRef.current < historyRef.current.length - 1)
//       restoreSnapshot(historyIndexRef.current + 1);
//   }, [restoreSnapshot]);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d", { willReadFrequently: true });
//     ctx.fillStyle = "#ffffff";
//     ctx.fillRect(0, 0, canvas.width, canvas.height);
//     saveSnapshot();
//   }, []);

//   useEffect(() => {
//     if (previewCanvasRef.current) {
//       previewCanvasRef.current.width = canvasSize.width;
//       previewCanvasRef.current.height = canvasSize.height;
//     }
//   }, [canvasSize]);

//   useEffect(() => {
//     const handleGlobalPointerMove = (e) => {
//       if (!isDraggingSelectionRef.current || !selectionRef.current) return;
//       const pos = getCanvasCoords(e);
//       const sel = selectionRef.current;
//       sel.x = pos.x - selectionDragOffsetRef.current.x;
//       sel.y = pos.y - selectionDragOffsetRef.current.y;
//       setSelectionState({ ...sel });
//     };

//     const handleGlobalPointerUp = () => {
//       if (isDraggingSelectionRef.current) {
//         isDraggingSelectionRef.current = false;
//       }
//     };

//     const handleClickOutsideMenu = (e) => {
//       if (menuBarRef.current && !menuBarRef.current.contains(e.target)) {
//         setOpenMenu(null);
//       }
//     };

//     window.addEventListener("pointermove", handleGlobalPointerMove);
//     window.addEventListener("pointerup", handleGlobalPointerUp);
//     document.addEventListener("mousedown", handleClickOutsideMenu);

//     return () => {
//       window.removeEventListener("pointermove", handleGlobalPointerMove);
//       window.removeEventListener("pointerup", handleGlobalPointerUp);
//       document.removeEventListener("mousedown", handleClickOutsideMenu);
//     };
//   }, [getCanvasCoords]);

//   const floodFill = (startX, startY, fillColorHex) => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d", { willReadFrequently: true });
//     const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
//     const data = imgData.data;
//     const width = canvas.width;
//     const height = canvas.height;

//     const targetColor = hexToRgb(fillColorHex);
//     const startIndex = (startY * width + startX) * 4;
//     const startR = data[startIndex];
//     const startG = data[startIndex + 1];
//     const startB = data[startIndex + 2];
//     const startA = data[startIndex + 3];

//     if (
//       startR === targetColor.r &&
//       startG === targetColor.g &&
//       startB === targetColor.b &&
//       startA === targetColor.a
//     )
//       return;

//     const queue = [startX, startY];
//     const visited = new Uint8Array(width * height);

//     while (queue.length > 0) {
//       const cy = queue.pop();
//       const cx = queue.pop();
//       const pos = cy * width + cx;
//       if (visited[pos]) continue;
//       visited[pos] = 1;

//       const idx = pos * 4;
//       if (
//         data[idx] === startR &&
//         data[idx + 1] === startG &&
//         data[idx + 2] === startB &&
//         data[idx + 3] === startA
//       ) {
//         data[idx] = targetColor.r;
//         data[idx + 1] = targetColor.g;
//         data[idx + 2] = targetColor.b;
//         data[idx + 3] = 255;

//         if (cx > 0 && !visited[pos - 1]) queue.push(cx - 1, cy);
//         if (cx < width - 1 && !visited[pos + 1]) queue.push(cx + 1, cy);
//         if (cy > 0 && !visited[pos - width]) queue.push(cx, cy - 1);
//         if (cy < height - 1 && !visited[pos + width]) queue.push(cx, cy + 1);
//       }
//     }

//     ctx.putImageData(imgData, 0, 0);
//     saveSnapshot();
//   };

//   const drawAirbrush = (ctx, x, y, color, radius) => {
//     ctx.fillStyle = color;
//     const density = radius * 3;
//     for (let i = 0; i < density; i++) {
//       const angle = Math.random() * Math.PI * 2;
//       const r = Math.random() * radius;
//       const px = Math.round(x + r * Math.cos(angle));
//       const py = Math.round(y + r * Math.sin(angle));
//       ctx.fillRect(px, py, 1, 1);
//     }
//   };

//   const drawBrushStroke = (ctx, x0, y0, x1, y1, shape, color) => {
//     ctx.strokeStyle = color;
//     ctx.fillStyle = color;

//     let size = 4;
//     let isSquare = false;

//     switch (shape) {
//       case "round-small":
//         size = 3;
//         break;
//       case "round-medium":
//         size = 8;
//         break;
//       case "round-large":
//         size = 14;
//         break;
//       case "square-medium":
//         size = 8;
//         isSquare = true;
//         break;
//       default:
//         size = 6;
//     }

//     if (isSquare) {
//       const dx = Math.abs(x1 - x0);
//       const dy = Math.abs(y1 - y0);
//       const sx = x0 < x1 ? 1 : -1;
//       const sy = y0 < y1 ? 1 : -1;
//       let err = dx - dy;
//       const half = Math.floor(size / 2);

//       while (true) {
//         ctx.fillRect(x0 - half, y0 - half, size, size);
//         if (x0 === x1 && y0 === y1) break;
//         const e2 = 2 * err;
//         if (e2 > -dy) {
//           err -= dy;
//           x0 += sx;
//         }
//         if (e2 < dx) {
//           err += dx;
//           y0 += sy;
//         }
//       }
//     } else {
//       ctx.lineWidth = size;
//       ctx.lineCap = "round";
//       ctx.lineJoin = "round";
//       ctx.beginPath();
//       ctx.moveTo(x0, y0);
//       ctx.lineTo(x1, y1);
//       ctx.stroke();
//     }
//   };

//   const drawPencilLine = (ctx, x0, y0, x1, y1, color) => {
//     ctx.fillStyle = color;
//     const dx = Math.abs(x1 - x0);
//     const dy = Math.abs(y1 - y0);
//     const sx = x0 < x1 ? 1 : -1;
//     const sy = y0 < y1 ? 1 : -1;
//     let err = dx - dy;

//     while (true) {
//       ctx.fillRect(x0, y0, 1, 1);
//       if (x0 === x1 && y0 === y1) break;
//       const e2 = 2 * err;
//       if (e2 > -dy) {
//         err -= dy;
//         x0 += sx;
//       }
//       if (e2 < dx) {
//         err += dx;
//         y0 += sy;
//       }
//     }
//   };

//   const commitSelection = useCallback(() => {
//     if (!selectionRef.current || !selectionRef.current.isFloating) return;
//     const sel = selectionRef.current;
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d", { willReadFrequently: true });

//     if (sel.imgData) {
//       const tempCanvas = document.createElement("canvas");
//       tempCanvas.width = sel.w;
//       tempCanvas.height = sel.h;
//       const tempCtx = tempCanvas.getContext("2d");
//       tempCtx.putImageData(sel.imgData, 0, 0);

//       if (isTransparentDraw) {
//         const secRgb = hexToRgb(secondaryColor);
//         const tempImgData = tempCtx.getImageData(0, 0, sel.w, sel.h);
//         for (let i = 0; i < tempImgData.data.length; i += 4) {
//           if (
//             tempImgData.data[i] === secRgb.r &&
//             tempImgData.data[i + 1] === secRgb.g &&
//             tempImgData.data[i + 2] === secRgb.b
//           ) {
//             tempImgData.data[i + 3] = 0;
//           }
//         }
//         tempCtx.putImageData(tempImgData, 0, 0);
//       }
//       ctx.drawImage(tempCanvas, sel.x, sel.y, sel.w, sel.h);
//     }

//     selectionRef.current = null;
//     setSelectionState(null);
//     setSelectionDim(null);
//     saveSnapshot();
//   }, [saveSnapshot, secondaryColor, isTransparentDraw]);

//   const commitTextToCanvas = useCallback(() => {
//     if (!activeTextBox || !activeTextBox.text.trim()) {
//       setActiveTextBox(null);
//       return;
//     }
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d", { willReadFrequently: true });

//     ctx.save();
//     ctx.font = `${textItalic ? "italic " : ""}${textBold ? "bold " : ""}${textSize}px ${textFont}`;
//     ctx.textBaseline = "top";

//     const lines = activeTextBox.text.split("\n");
//     const lineHeight = textSize * 1.25;

//     if (!isTransparentDraw) {
//       let maxW = 0;
//       lines.forEach((l) => {
//         const w = ctx.measureText(l).width;
//         if (w > maxW) maxW = w;
//       });
//       ctx.fillStyle = secondaryColor;
//       ctx.fillRect(
//         activeTextBox.x,
//         activeTextBox.y,
//         Math.max(maxW + 6, activeTextBox.width),
//         lines.length * lineHeight + 6,
//       );
//     }

//     ctx.fillStyle = primaryColor;
//     lines.forEach((line, i) => {
//       ctx.fillText(
//         line,
//         activeTextBox.x + 2,
//         activeTextBox.y + 2 + i * lineHeight,
//       );
//       if (textUnderline) {
//         const width = ctx.measureText(line).width;
//         ctx.fillRect(
//           activeTextBox.x + 2,
//           activeTextBox.y + 2 + (i + 1) * lineHeight - 2,
//           width,
//           1,
//         );
//       }
//     });

//     ctx.restore();
//     setActiveTextBox(null);
//     saveSnapshot();
//   }, [
//     activeTextBox,
//     primaryColor,
//     secondaryColor,
//     textBold,
//     textFont,
//     textItalic,
//     isTransparentDraw,
//     textSize,
//     textUnderline,
//     saveSnapshot,
//   ]);

//   const commitPolygon = useCallback(() => {
//     const pts = polygonPointsRef.current;
//     if (pts.length < 2) {
//       polygonPointsRef.current = [];
//       if (previewCanvasRef.current) {
//         const pctx = previewCanvasRef.current.getContext("2d");
//         pctx.clearRect(
//           0,
//           0,
//           previewCanvasRef.current.width,
//           previewCanvasRef.current.height,
//         );
//       }
//       return;
//     }

//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d", { willReadFrequently: true });
//     const isRight = currentButtonRef.current === 2;
//     const activeColor = isRight ? secondaryColor : primaryColor;
//     const activeBgColor = isRight ? primaryColor : secondaryColor;

//     ctx.lineWidth = lineWidth;
//     ctx.strokeStyle = activeColor;
//     ctx.fillStyle = activeBgColor;

//     ctx.beginPath();
//     pts.forEach((p, idx) => {
//       if (idx === 0) ctx.moveTo(p.x + 0.5, p.y + 0.5);
//       else ctx.lineTo(p.x + 0.5, p.y + 0.5);
//     });
//     ctx.closePath();

//     if (shapeStyle === "filled") ctx.fill();
//     else if (shapeStyle === "filled-outline") {
//       ctx.fill();
//       ctx.stroke();
//     } else {
//       ctx.stroke();
//     }

//     polygonPointsRef.current = [];
//     if (previewCanvasRef.current) {
//       const pctx = previewCanvasRef.current.getContext("2d");
//       pctx.clearRect(
//         0,
//         0,
//         previewCanvasRef.current.width,
//         previewCanvasRef.current.height,
//       );
//     }
//     saveSnapshot();
//   }, [lineWidth, primaryColor, secondaryColor, shapeStyle, saveSnapshot]);

//   const cutSelection = useCallback(() => {
//     if (!selectionRef.current) return;
//     const sel = selectionRef.current;
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d", { willReadFrequently: true });
//     internalClipboardRef.current = ctx.getImageData(sel.x, sel.y, sel.w, sel.h);
//     setHasClipboard(true);

//     ctx.fillStyle = secondaryColor;
//     ctx.fillRect(sel.x, sel.y, sel.w, sel.h);

//     selectionRef.current = null;
//     setSelectionState(null);
//     setSelectionDim(null);
//     saveSnapshot();
//   }, [secondaryColor, saveSnapshot]);

//   const copySelection = useCallback(() => {
//     if (!selectionRef.current) return;
//     const sel = selectionRef.current;
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d", { willReadFrequently: true });
//     internalClipboardRef.current = ctx.getImageData(sel.x, sel.y, sel.w, sel.h);
//     setHasClipboard(true);
//   }, []);

//   const pasteClipboard = useCallback(() => {
//     if (!internalClipboardRef.current) return;
//     commitSelection();
//     const clipData = internalClipboardRef.current;
//     const newSel = {
//       x: 10,
//       y: 10,
//       w: clipData.width,
//       h: clipData.height,
//       imgData: clipData,
//       isFloating: true,
//     };
//     selectionRef.current = newSel;
//     setSelectionState(newSel);
//     setSelectionDim({ w: clipData.width, h: clipData.height });
//     setSelectedTool("rectSelect");
//   }, [commitSelection]);

//   const deleteSelection = useCallback(() => {
//     if (!selectionRef.current) return;
//     const sel = selectionRef.current;
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d", { willReadFrequently: true });
//     ctx.fillStyle = secondaryColor;
//     ctx.fillRect(sel.x, sel.y, sel.w, sel.h);
//     selectionRef.current = null;
//     setSelectionState(null);
//     setSelectionDim(null);
//     saveSnapshot();
//   }, [secondaryColor, saveSnapshot]);

//   const selectAll = useCallback(() => {
//     commitSelection();
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d", { willReadFrequently: true });
//     const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

//     ctx.fillStyle = secondaryColor;
//     ctx.fillRect(0, 0, canvas.width, canvas.height);

//     const sel = {
//       x: 0,
//       y: 0,
//       w: canvas.width,
//       h: canvas.height,
//       imgData,
//       isFloating: true,
//     };
//     selectionRef.current = sel;
//     setSelectionState(sel);
//     setSelectionDim({ w: canvas.width, h: canvas.height });
//     setSelectedTool("rectSelect");
//   }, [commitSelection, secondaryColor]);

//   const flipCanvas = useCallback(
//     (axis) => {
//       commitSelection();
//       commitTextToCanvas();
//       const canvas = canvasRef.current;
//       if (!canvas) return;
//       const ctx = canvas.getContext("2d", { willReadFrequently: true });
//       const tempCanvas = document.createElement("canvas");
//       tempCanvas.width = canvas.width;
//       tempCanvas.height = canvas.height;
//       tempCanvas.getContext("2d").drawImage(canvas, 0, 0);

//       ctx.save();
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       if (axis === "h") {
//         ctx.translate(canvas.width, 0);
//         ctx.scale(-1, 1);
//       } else {
//         ctx.translate(0, canvas.height);
//         ctx.scale(1, -1);
//       }
//       ctx.drawImage(tempCanvas, 0, 0);
//       ctx.restore();
//       saveSnapshot();
//     },
//     [commitSelection, commitTextToCanvas, saveSnapshot],
//   );

//   const rotateCanvas = useCallback(
//     (direction) => {
//       commitSelection();
//       commitTextToCanvas();
//       const canvas = canvasRef.current;
//       if (!canvas) return;
//       const oldW = canvas.width;
//       const oldH = canvas.height;
//       const tempCanvas = document.createElement("canvas");
//       tempCanvas.width = oldW;
//       tempCanvas.height = oldH;
//       tempCanvas.getContext("2d").drawImage(canvas, 0, 0);

//       const newW = oldH;
//       const newH = oldW;
//       canvas.width = newW;
//       canvas.height = newH;
//       setCanvasSize({ width: newW, height: newH });

//       const ctx = canvas.getContext("2d", { willReadFrequently: true });
//       ctx.fillStyle = secondaryColor;
//       ctx.fillRect(0, 0, newW, newH);

//       ctx.save();
//       if (direction === "cw") {
//         ctx.translate(newW, 0);
//         ctx.rotate(Math.PI / 2);
//       } else {
//         ctx.translate(0, newH);
//         ctx.rotate(-Math.PI / 2);
//       }
//       ctx.drawImage(tempCanvas, 0, 0);
//       ctx.restore();
//       saveSnapshot();
//     },
//     [commitSelection, commitTextToCanvas, secondaryColor, saveSnapshot],
//   );

//   const invertColors = useCallback(() => {
//     commitSelection();
//     commitTextToCanvas();
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d", { willReadFrequently: true });
//     const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
//     const d = imgData.data;
//     for (let i = 0; i < d.length; i += 4) {
//       d[i] = 255 - d[i];
//       d[i + 1] = 255 - d[i + 1];
//       d[i + 2] = 255 - d[i + 2];
//     }
//     ctx.putImageData(imgData, 0, 0);
//     saveSnapshot();
//   }, [commitSelection, commitTextToCanvas, saveSnapshot]);

//   const clearCanvas = useCallback(() => {
//     commitSelection();
//     commitTextToCanvas();
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d", { willReadFrequently: true });
//     ctx.fillStyle = secondaryColor;
//     ctx.fillRect(0, 0, canvas.width, canvas.height);
//     saveSnapshot();
//   }, [commitSelection, commitTextToCanvas, secondaryColor, saveSnapshot]);

//   const saveImagePNG = useCallback(() => {
//     commitSelection();
//     commitTextToCanvas();
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const url = canvas.toDataURL("image/png");
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = "untitled.png";
//     a.click();
//   }, [commitSelection, commitTextToCanvas]);

//   const handleOpenLocalFile = (e) => {
//     const file = e.target.files?.[0];
//     if (!file) return;
//     const reader = new FileReader();
//     reader.onload = (ev) => {
//       const img = new Image();
//       img.onload = () => {
//         commitSelection();
//         commitTextToCanvas();
//         const canvas = canvasRef.current;
//         if (!canvas) return;
//         canvas.width = img.width;
//         canvas.height = img.height;
//         setCanvasSize({ width: img.width, height: img.height });
//         const ctx = canvas.getContext("2d", { willReadFrequently: true });
//         ctx.fillStyle = "#ffffff";
//         ctx.fillRect(0, 0, img.width, img.height);
//         ctx.drawImage(img, 0, 0);
//         saveSnapshot();
//       };
//       img.src = ev.target?.result;
//     };
//     reader.readAsDataURL(file);
//     e.target.value = "";
//   };

//   const handlePointerDown = (e) => {
//     if (e.button === 1) return;
//     e.target.setPointerCapture?.(e.pointerId);

//     if (activeTextBox && selectedTool !== "text") {
//       commitTextToCanvas();
//     }

//     const pos = getCanvasCoords(e);
//     const isRight = e.button === 2;
//     currentButtonRef.current = isRight ? 2 : 0;
//     const activeColor = isRight ? secondaryColor : primaryColor;

//     startPosRef.current = pos;
//     lastPosRef.current = pos;

//     if (selectedTool === "rectSelect" || selectedTool === "freeSelect") {
//       if (selectionRef.current && selectionRef.current.isFloating) {
//         const sel = selectionRef.current;
//         const inside =
//           pos.x >= sel.x &&
//           pos.x <= sel.x + sel.w &&
//           pos.y >= sel.y &&
//           pos.y <= sel.y + sel.h;
//         if (inside) {
//           isDraggingSelectionRef.current = true;
//           selectionDragOffsetRef.current = {
//             x: pos.x - sel.x,
//             y: pos.y - sel.y,
//           };
//           return;
//         } else {
//           commitSelection();
//         }
//       }
//     } else {
//       commitSelection();
//     }

//     isDrawingRef.current = true;

//     if (selectedTool === "polygon") {
//       const now = Date.now();
//       const isDoubleTap = now - lastClickTimeRef.current < 350;
//       lastClickTimeRef.current = now;

//       const firstPt = polygonPointsRef.current[0];
//       const isNearStart =
//         firstPt && Math.hypot(pos.x - firstPt.x, pos.y - firstPt.y) < 6;

//       if (
//         (isDoubleTap || isNearStart) &&
//         polygonPointsRef.current.length >= 2
//       ) {
//         commitPolygon();
//         isDrawingRef.current = false;
//         return;
//       }

//       polygonPointsRef.current.push(pos);
//       return;
//     }

//     if (selectedTool === "curve") {
//       if (curveStepRef.current === 0) {
//         curvePointsRef.current.p0 = pos;
//         curvePointsRef.current.p3 = pos;
//       }
//       return;
//     }

//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d", { willReadFrequently: true });

//     if (selectedTool === "magnifier") {
//       setZoom((prev) => (prev === 1 ? 2 : prev === 2 ? 4 : 1));
//       isDrawingRef.current = false;
//       return;
//     }

//     if (selectedTool === "picker") {
//       const imgData = ctx.getImageData(pos.x, pos.y, 1, 1).data;
//       const hex = rgbToHex(imgData[0], imgData[1], imgData[2]);
//       if (isRight) setSecondaryColor(hex);
//       else setPrimaryColor(hex);
//       isDrawingRef.current = false;
//       return;
//     }

//     if (selectedTool === "fill") {
//       floodFill(pos.x, pos.y, activeColor);
//       isDrawingRef.current = false;
//       return;
//     }

//     if (selectedTool === "pencil") {
//       ctx.fillStyle = activeColor;
//       ctx.fillRect(pos.x, pos.y, 1, 1);
//     } else if (selectedTool === "brush") {
//       drawBrushStroke(ctx, pos.x, pos.y, pos.x, pos.y, brushShape, activeColor);
//     } else if (selectedTool === "eraser") {
//       ctx.fillStyle = secondaryColor;
//       ctx.fillRect(
//         pos.x - Math.floor(eraserSize / 2),
//         pos.y - Math.floor(eraserSize / 2),
//         eraserSize,
//         eraserSize,
//       );
//     } else if (selectedTool === "airbrush") {
//       drawAirbrush(ctx, pos.x, pos.y, activeColor, airbrushSize);
//     }
//   };

//   const handlePointerMove = (e) => {
//     const pos = getCanvasCoords(e);
//     setCursorPos(pos);

//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d", { willReadFrequently: true });
//     const previewCanvas = previewCanvasRef.current;
//     const prevCtx = previewCanvas ? previewCanvas.getContext("2d") : null;

//     const isRight = currentButtonRef.current === 2;
//     const activeColor = isRight ? secondaryColor : primaryColor;
//     const activeBgColor = isRight ? primaryColor : secondaryColor;

//     if (selectedTool === "polygon" && polygonPointsRef.current.length > 0) {
//       if (!prevCtx) return;
//       prevCtx.clearRect(0, 0, previewCanvas.width, previewCanvas.height);
//       prevCtx.lineWidth = lineWidth;
//       prevCtx.strokeStyle = activeColor;
//       prevCtx.beginPath();
//       polygonPointsRef.current.forEach((p, idx) => {
//         if (idx === 0) prevCtx.moveTo(p.x + 0.5, p.y + 0.5);
//         else prevCtx.lineTo(p.x + 0.5, p.y + 0.5);
//       });
//       prevCtx.lineTo(pos.x + 0.5, pos.y + 0.5);
//       prevCtx.stroke();
//       return;
//     }

//     if (!isDrawingRef.current) return;

//     if (selectedTool === "pencil") {
//       drawPencilLine(
//         ctx,
//         lastPosRef.current.x,
//         lastPosRef.current.y,
//         pos.x,
//         pos.y,
//         activeColor,
//       );
//       lastPosRef.current = pos;
//     } else if (selectedTool === "brush") {
//       drawBrushStroke(
//         ctx,
//         lastPosRef.current.x,
//         lastPosRef.current.y,
//         pos.x,
//         pos.y,
//         brushShape,
//         activeColor,
//       );
//       lastPosRef.current = pos;
//     } else if (selectedTool === "eraser") {
//       ctx.fillStyle = secondaryColor;
//       ctx.fillRect(
//         pos.x - Math.floor(eraserSize / 2),
//         pos.y - Math.floor(eraserSize / 2),
//         eraserSize,
//         eraserSize,
//       );
//       lastPosRef.current = pos;
//     } else if (selectedTool === "airbrush") {
//       drawAirbrush(ctx, pos.x, pos.y, activeColor, airbrushSize);
//       lastPosRef.current = pos;
//     } else if (selectedTool === "rectSelect" || selectedTool === "text") {
//       if (!prevCtx) return;
//       prevCtx.clearRect(0, 0, previewCanvas.width, previewCanvas.height);
//       const x = Math.min(startPosRef.current.x, pos.x);
//       const y = Math.min(startPosRef.current.y, pos.y);
//       const w = Math.abs(pos.x - startPosRef.current.x);
//       const h = Math.abs(pos.y - startPosRef.current.y);
//       prevCtx.setLineDash([3, 3]);
//       prevCtx.strokeStyle = "#000000";
//       prevCtx.strokeRect(x + 0.5, y + 0.5, w, h);
//       if (selectedTool === "rectSelect") setSelectionDim({ w, h });
//     } else if (
//       ["line", "curve", "rectangle", "ellipse", "roundedRect"].includes(
//         selectedTool,
//       )
//     ) {
//       if (!prevCtx) return;
//       prevCtx.clearRect(0, 0, previewCanvas.width, previewCanvas.height);
//       prevCtx.lineWidth = lineWidth;
//       prevCtx.strokeStyle = activeColor;
//       prevCtx.fillStyle = activeBgColor;

//       if (selectedTool === "line") {
//         prevCtx.beginPath();
//         prevCtx.moveTo(
//           startPosRef.current.x + 0.5,
//           startPosRef.current.y + 0.5,
//         );
//         prevCtx.lineTo(pos.x + 0.5, pos.y + 0.5);
//         prevCtx.stroke();
//       } else if (selectedTool === "curve") {
//         if (curveStepRef.current === 0) {
//           prevCtx.beginPath();
//           prevCtx.moveTo(
//             curvePointsRef.current.p0.x + 0.5,
//             curvePointsRef.current.p0.y + 0.5,
//           );
//           prevCtx.lineTo(pos.x + 0.5, pos.y + 0.5);
//           prevCtx.stroke();
//         } else if (curveStepRef.current === 1) {
//           prevCtx.beginPath();
//           prevCtx.moveTo(
//             curvePointsRef.current.p0.x + 0.5,
//             curvePointsRef.current.p0.y + 0.5,
//           );
//           prevCtx.quadraticCurveTo(
//             pos.x,
//             pos.y,
//             curvePointsRef.current.p3.x + 0.5,
//             curvePointsRef.current.p3.y + 0.5,
//           );
//           prevCtx.stroke();
//         } else if (curveStepRef.current === 2) {
//           prevCtx.beginPath();
//           prevCtx.moveTo(
//             curvePointsRef.current.p0.x + 0.5,
//             curvePointsRef.current.p0.y + 0.5,
//           );
//           prevCtx.bezierCurveTo(
//             curvePointsRef.current.p1.x,
//             curvePointsRef.current.p1.y,
//             pos.x,
//             pos.y,
//             curvePointsRef.current.p3.x + 0.5,
//             curvePointsRef.current.p3.y + 0.5,
//           );
//           prevCtx.stroke();
//         }
//       } else if (selectedTool === "rectangle") {
//         const x = Math.min(startPosRef.current.x, pos.x);
//         const y = Math.min(startPosRef.current.y, pos.y);
//         const w = Math.abs(pos.x - startPosRef.current.x);
//         const h = Math.abs(pos.y - startPosRef.current.y);
//         if (shapeStyle === "filled") prevCtx.fillRect(x, y, w, h);
//         else if (shapeStyle === "filled-outline") {
//           prevCtx.fillRect(x, y, w, h);
//           prevCtx.strokeRect(x + 0.5, y + 0.5, w, h);
//         } else prevCtx.strokeRect(x + 0.5, y + 0.5, w, h);
//       } else if (selectedTool === "ellipse") {
//         const rx = Math.abs(pos.x - startPosRef.current.x) / 2;
//         const ry = Math.abs(pos.y - startPosRef.current.y) / 2;
//         const cx = Math.min(startPosRef.current.x, pos.x) + rx;
//         const cy = Math.min(startPosRef.current.y, pos.y) + ry;
//         prevCtx.beginPath();
//         prevCtx.ellipse(
//           cx,
//           cy,
//           Math.max(0.1, rx),
//           Math.max(0.1, ry),
//           0,
//           0,
//           Math.PI * 2,
//         );
//         if (shapeStyle === "filled") prevCtx.fill();
//         else if (shapeStyle === "filled-outline") {
//           prevCtx.fill();
//           prevCtx.stroke();
//         } else prevCtx.stroke();
//       } else if (selectedTool === "roundedRect") {
//         const x = Math.min(startPosRef.current.x, pos.x);
//         const y = Math.min(startPosRef.current.y, pos.y);
//         const w = Math.abs(pos.x - startPosRef.current.x);
//         const h = Math.abs(pos.y - startPosRef.current.y);
//         const r = Math.min(8, w / 4, h / 4);
//         prevCtx.beginPath();
//         prevCtx.roundRect(x + 0.5, y + 0.5, w, h, r);
//         if (shapeStyle === "filled") prevCtx.fill();
//         else if (shapeStyle === "filled-outline") {
//           prevCtx.fill();
//           prevCtx.stroke();
//         } else prevCtx.stroke();
//       }
//     }
//   };

//   const handlePointerUp = (e) => {
//     e.target.releasePointerCapture?.(e.pointerId);
//     if (!isDrawingRef.current) return;
//     isDrawingRef.current = false;

//     if (selectedTool === "polygon") return;

//     const pos = getCanvasCoords(e);
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d", { willReadFrequently: true });
//     const previewCanvas = previewCanvasRef.current;
//     const prevCtx = previewCanvas ? previewCanvas.getContext("2d") : null;

//     const isRight = currentButtonRef.current === 2;
//     const activeColor = isRight ? secondaryColor : primaryColor;
//     const activeBgColor = isRight ? primaryColor : secondaryColor;

//     if (previewCanvas && prevCtx)
//       prevCtx.clearRect(0, 0, previewCanvas.width, previewCanvas.height);

//     if (selectedTool === "rectSelect") {
//       const x = Math.min(startPosRef.current.x, pos.x);
//       const y = Math.min(startPosRef.current.y, pos.y);
//       const w = Math.abs(pos.x - startPosRef.current.x);
//       const h = Math.abs(pos.y - startPosRef.current.y);

//       if (w > 2 && h > 2) {
//         const imgData = ctx.getImageData(x, y, w, h);
//         ctx.fillStyle = secondaryColor;
//         ctx.fillRect(x, y, w, h);

//         const sel = { x, y, w, h, imgData, isFloating: true };
//         selectionRef.current = sel;
//         setSelectionState({ ...sel });
//         setSelectionDim({ w, h });
//       }
//       return;
//     }

//     if (selectedTool === "text") {
//       const x = Math.min(startPosRef.current.x, pos.x);
//       const y = Math.min(startPosRef.current.y, pos.y);
//       const width = Math.max(120, Math.abs(pos.x - startPosRef.current.x));
//       const height = Math.max(48, Math.abs(pos.y - startPosRef.current.y));
//       setActiveTextBox({ x, y, width, height, text: "" });
//       setTimeout(() => textInputRef.current?.focus(), 50);
//       return;
//     }

//     if (selectedTool === "line") {
//       ctx.lineWidth = lineWidth;
//       ctx.strokeStyle = activeColor;
//       ctx.beginPath();
//       ctx.moveTo(startPosRef.current.x + 0.5, startPosRef.current.y + 0.5);
//       ctx.lineTo(pos.x + 0.5, pos.y + 0.5);
//       ctx.stroke();
//       saveSnapshot();
//     } else if (selectedTool === "curve") {
//       if (curveStepRef.current === 0) {
//         curvePointsRef.current.p3 = pos;
//         curveStepRef.current = 1;
//       } else if (curveStepRef.current === 1) {
//         curvePointsRef.current.p1 = pos;
//         curveStepRef.current = 2;
//       } else if (curveStepRef.current === 2) {
//         curvePointsRef.current.p2 = pos;
//         ctx.lineWidth = lineWidth;
//         ctx.strokeStyle = activeColor;
//         ctx.beginPath();
//         ctx.moveTo(
//           curvePointsRef.current.p0.x + 0.5,
//           curvePointsRef.current.p0.y + 0.5,
//         );
//         ctx.bezierCurveTo(
//           curvePointsRef.current.p1.x,
//           curvePointsRef.current.p1.y,
//           curvePointsRef.current.p2.x,
//           curvePointsRef.current.p2.y,
//           curvePointsRef.current.p3.x + 0.5,
//           curvePointsRef.current.p3.y + 0.5,
//         );
//         ctx.stroke();
//         curveStepRef.current = 0;
//         curvePointsRef.current = { p0: null, p1: null, p2: null, p3: null };
//         saveSnapshot();
//       }
//     } else if (selectedTool === "rectangle") {
//       const x = Math.min(startPosRef.current.x, pos.x);
//       const y = Math.min(startPosRef.current.y, pos.y);
//       const w = Math.abs(pos.x - startPosRef.current.x);
//       const h = Math.abs(pos.y - startPosRef.current.y);
//       ctx.lineWidth = lineWidth;
//       ctx.strokeStyle = activeColor;
//       ctx.fillStyle = activeBgColor;
//       if (shapeStyle === "filled") ctx.fillRect(x, y, w, h);
//       else if (shapeStyle === "filled-outline") {
//         ctx.fillRect(x, y, w, h);
//         ctx.strokeRect(x + 0.5, y + 0.5, w, h);
//       } else ctx.strokeRect(x + 0.5, y + 0.5, w, h);
//       saveSnapshot();
//     } else if (selectedTool === "ellipse") {
//       const rx = Math.abs(pos.x - startPosRef.current.x) / 2;
//       const ry = Math.abs(pos.y - startPosRef.current.y) / 2;
//       const cx = Math.min(startPosRef.current.x, pos.x) + rx;
//       const cy = Math.min(startPosRef.current.y, pos.y) + ry;
//       ctx.lineWidth = lineWidth;
//       ctx.strokeStyle = activeColor;
//       ctx.fillStyle = activeBgColor;
//       ctx.beginPath();
//       ctx.ellipse(
//         cx,
//         cy,
//         Math.max(0.1, rx),
//         Math.max(0.1, ry),
//         0,
//         0,
//         Math.PI * 2,
//       );
//       if (shapeStyle === "filled") ctx.fill();
//       else if (shapeStyle === "filled-outline") {
//         ctx.fill();
//         ctx.stroke();
//       } else ctx.stroke();
//       saveSnapshot();
//     } else if (selectedTool === "roundedRect") {
//       const x = Math.min(startPosRef.current.x, pos.x);
//       const y = Math.min(startPosRef.current.y, pos.y);
//       const w = Math.abs(pos.x - startPosRef.current.x);
//       const h = Math.abs(pos.y - startPosRef.current.y);
//       const r = Math.min(8, w / 4, h / 4);
//       ctx.lineWidth = lineWidth;
//       ctx.strokeStyle = activeColor;
//       ctx.fillStyle = activeBgColor;
//       ctx.beginPath();
//       ctx.roundRect(x + 0.5, y + 0.5, w, h, r);
//       if (shapeStyle === "filled") ctx.fill();
//       else if (shapeStyle === "filled-outline") {
//         ctx.fill();
//         ctx.stroke();
//       } else ctx.stroke();
//       saveSnapshot();
//     } else if (
//       ["pencil", "brush", "eraser", "airbrush"].includes(selectedTool)
//     ) {
//       saveSnapshot();
//     }
//   };

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       const isCmd = e.ctrlKey || e.metaKey;
//       const targetTag = (e.target && e.target.tagName) || "";
//       if (targetTag === "INPUT" || targetTag === "TEXTAREA") {
//         if (e.key === "Escape") setActiveTextBox(null);
//         return;
//       }

//       if (isCmd && e.key.toLowerCase() === "z" && !e.shiftKey) {
//         e.preventDefault();
//         handleUndo();
//       } else if (
//         isCmd &&
//         (e.key.toLowerCase() === "y" ||
//           (e.key.toLowerCase() === "z" && e.shiftKey))
//       ) {
//         e.preventDefault();
//         handleRedo();
//       } else if (isCmd && e.key.toLowerCase() === "s") {
//         e.preventDefault();
//         saveImagePNG();
//       } else if (isCmd && e.key.toLowerCase() === "n") {
//         e.preventDefault();
//         setActiveDialog("newConfirm");
//       } else if (isCmd && e.key.toLowerCase() === "c") {
//         e.preventDefault();
//         copySelection();
//       } else if (isCmd && e.key.toLowerCase() === "x") {
//         e.preventDefault();
//         cutSelection();
//       } else if (isCmd && e.key.toLowerCase() === "v") {
//         e.preventDefault();
//         pasteClipboard();
//       } else if (isCmd && e.key.toLowerCase() === "a") {
//         e.preventDefault();
//         selectAll();
//       } else if (isCmd && e.key.toLowerCase() === "i") {
//         e.preventDefault();
//         invertColors();
//       } else if (e.key === "Delete") {
//         deleteSelection();
//       } else if (e.key === "Escape") {
//         commitSelection();
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, [
//     handleUndo,
//     handleRedo,
//     saveImagePNG,
//     copySelection,
//     cutSelection,
//     pasteClipboard,
//     selectAll,
//     invertColors,
//     deleteSelection,
//     commitSelection,
//   ]);

//   const startCanvasResize = (handle, e) => {
//     e.stopPropagation();
//     isResizingCanvasRef.current = handle;
//     resizeStartDimRef.current = {
//       width: canvasSize.width,
//       height: canvasSize.height,
//       startX: e.clientX,
//       startY: e.clientY,
//     };

//     const handlePointerMoveResizing = (ev) => {
//       if (!isResizingCanvasRef.current) return;
//       const dx = Math.round(
//         (ev.clientX - resizeStartDimRef.current.startX) / zoom,
//       );
//       const dy = Math.round(
//         (ev.clientY - resizeStartDimRef.current.startY) / zoom,
//       );

//       let newW = resizeStartDimRef.current.width;
//       let newH = resizeStartDimRef.current.height;

//       if (
//         isResizingCanvasRef.current === "e" ||
//         isResizingCanvasRef.current === "se"
//       ) {
//         newW = Math.max(100, resizeStartDimRef.current.width + dx);
//       }
//       if (
//         isResizingCanvasRef.current === "s" ||
//         isResizingCanvasRef.current === "se"
//       ) {
//         newH = Math.max(100, resizeStartDimRef.current.height + dy);
//       }

//       const canvas = canvasRef.current;
//       if (!canvas) return;
//       const oldData = canvas
//         .getContext("2d", { willReadFrequently: true })
//         .getImageData(0, 0, canvas.width, canvas.height);
//       canvas.width = newW;
//       canvas.height = newH;
//       const ctx = canvas.getContext("2d", { willReadFrequently: true });
//       ctx.fillStyle = secondaryColor;
//       ctx.fillRect(0, 0, newW, newH);
//       ctx.putImageData(oldData, 0, 0);
//       setCanvasSize({ width: newW, height: newH });
//     };

//     const handlePointerUpResizing = () => {
//       if (isResizingCanvasRef.current) {
//         isResizingCanvasRef.current = null;
//         saveSnapshot();
//       }
//       window.removeEventListener("pointermove", handlePointerMoveResizing);
//       window.removeEventListener("pointerup", handlePointerUpResizing);
//     };

//     window.addEventListener("pointermove", handlePointerMoveResizing);
//     window.addEventListener("pointerup", handlePointerUpResizing);
//   };

//   const handleToolSelect = (toolId, name) => {
//     commitSelection();
//     if (polygonPointsRef.current.length > 0) commitPolygon();
//     if (activeTextBox) commitTextToCanvas();
//     setSelectedTool(toolId);
//     setStatusMessage(name);
//   };

//   return (
//     <div className="w-full min-h-screen bg-[#d0d0d0] flex items-center justify-center p-2 sm:p-6 overflow-auto select-none">
//       {/* 50% / Centered Retro Paint Window Frame */}
//       <div
//         className="jspaint flex flex-col w-[680px] h-[520px] max-w-full max-h-[92vh] bg-[#c0c0c0] text-black select-none font-sans overflow-hidden text-[11px] border-2 border-t-[#ffffff] border-l-[#ffffff] border-r-[#404040] border-b-[#404040] shadow-[3px_3px_12px_rgba(0,0,0,0.35)]"
//         style={{ fontFamily: 'Tahoma, "MS Sans Serif", Arial, sans-serif' }}
//         onContextMenu={(e) => e.preventDefault()}
//       >
//         <input
//           type="file"
//           ref={fileInputRef}
//           className="hidden"
//           accept="image/*"
//           onChange={handleOpenLocalFile}
//         />

//         {/* 1. TITLE BAR */}
//         <div className="flex items-center justify-between bg-gradient-to-r from-[#000080] to-[#1084d0] text-white font-bold px-2 py-[2px] text-[12px] shrink-0">
//           <div className="flex items-center gap-1.5">
//             <span className="w-3 h-3 bg-white/20 border border-white/50 inline-block"></span>
//             <span>untitled - Pixels Paint</span>
//           </div>
//           <div className="flex items-center gap-[2px]">
//             <button className="w-4 h-4 bg-[#c0c0c0] text-black text-[10px] flex items-center justify-center border border-white shadow-[inset_-1px_-1px_0_#404040,inset_1px_1px_0_#dfdfdf]">
//               _
//             </button>
//             <button className="w-4 h-4 bg-[#c0c0c0] text-black text-[10px] flex items-center justify-center border border-white shadow-[inset_-1px_-1px_0_#404040,inset_1px_1px_0_#dfdfdf]">
//               □
//             </button>
//             <button className="w-4 h-4 bg-[#c0c0c0] text-black text-[10px] flex items-center justify-center border border-white shadow-[inset_-1px_-1px_0_#404040,inset_1px_1px_0_#dfdfdf]">
//               ×
//             </button>
//           </div>
//         </div>

//         {/* 2. MENUS */}
//         <div
//           ref={menuBarRef}
//           className="menus flex items-center bg-[#c0c0c0] px-1 py-[2px] border-b border-[#808080] z-50 text-[12px] overflow-x-auto shrink-0 scrollbar-none"
//         >
//           {["file", "edit", "view", "image", "colors", "help"].map(
//             (menuKey) => (
//               <div key={menuKey} className="menu-container relative">
//                 <div
//                   className={`menu-button px-2 py-[2px] capitalize cursor-pointer ${
//                     openMenu === menuKey
//                       ? "bg-[#000080] text-white"
//                       : "hover:bg-[#dfdfdf]"
//                   }`}
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     setOpenMenu(openMenu === menuKey ? null : menuKey);
//                   }}
//                 >
//                   <span className="underline">{menuKey[0]}</span>
//                   {menuKey.slice(1)}
//                 </div>
//                 {openMenu === menuKey && (
//                   <div className="menu-popup absolute left-0 top-full bg-[#c0c0c0] border-2 border-t-[#ffffff] border-l-[#ffffff] border-r-[#808080] border-b-[#808080] shadow-[1px_1px_0px_#000] py-[2px] min-w-[170px] z-50">
//                     <table className="menu-popup-table w-full">
//                       <tbody>
//                         {menuKey === "file" && (
//                           <>
//                             <tr
//                               className="hover:bg-[#000080] hover:text-white cursor-pointer"
//                               onClick={() => {
//                                 setActiveDialog("newConfirm");
//                                 setOpenMenu(null);
//                               }}
//                             >
//                               <td className="px-3 py-1">
//                                 <span className="underline">N</span>ew
//                               </td>
//                               <td className="text-[10px] text-right pr-2 text-gray-500">
//                                 Ctrl+N
//                               </td>
//                             </tr>
//                             <tr
//                               className="hover:bg-[#000080] hover:text-white cursor-pointer"
//                               onClick={() => {
//                                 fileInputRef.current?.click();
//                                 setOpenMenu(null);
//                               }}
//                             >
//                               <td className="px-3 py-1">
//                                 <span className="underline">O</span>pen...
//                               </td>
//                               <td className="text-[10px] text-right pr-2 text-gray-500">
//                                 Ctrl+O
//                               </td>
//                             </tr>
//                             <tr
//                               className="hover:bg-[#000080] hover:text-white cursor-pointer"
//                               onClick={() => {
//                                 saveImagePNG();
//                                 setOpenMenu(null);
//                               }}
//                             >
//                               <td className="px-3 py-1">
//                                 <span className="underline">S</span>ave As PNG
//                               </td>
//                               <td className="text-[10px] text-right pr-2 text-gray-500">
//                                 Ctrl+S
//                               </td>
//                             </tr>
//                           </>
//                         )}
//                         {menuKey === "edit" && (
//                           <>
//                             <tr
//                               className={`hover:bg-[#000080] hover:text-white cursor-pointer ${historyIndex <= 0 ? "opacity-50 pointer-events-none" : ""}`}
//                               onClick={() => {
//                                 handleUndo();
//                                 setOpenMenu(null);
//                               }}
//                             >
//                               <td className="px-3 py-1">
//                                 <span className="underline">U</span>ndo
//                               </td>
//                               <td className="text-[10px] text-right pr-2">
//                                 Ctrl+Z
//                               </td>
//                             </tr>
//                             <tr
//                               className={`hover:bg-[#000080] hover:text-white cursor-pointer ${historyIndex >= historyLength - 1 ? "opacity-50 pointer-events-none" : ""}`}
//                               onClick={() => {
//                                 handleRedo();
//                                 setOpenMenu(null);
//                               }}
//                             >
//                               <td className="px-3 py-1">
//                                 <span className="underline">R</span>edo
//                               </td>
//                               <td className="text-[10px] text-right pr-2">
//                                 Ctrl+Y
//                               </td>
//                             </tr>
//                             <tr className="border-t border-[#808080]">
//                               <td colSpan={2} className="p-0" />
//                             </tr>
//                             <tr
//                               className={`hover:bg-[#000080] hover:text-white cursor-pointer ${!selectionState ? "opacity-50 pointer-events-none" : ""}`}
//                               onClick={() => {
//                                 cutSelection();
//                                 setOpenMenu(null);
//                               }}
//                             >
//                               <td className="px-3 py-1">
//                                 Cu<span className="underline">t</span>
//                               </td>
//                               <td className="text-[10px] text-right pr-2">
//                                 Ctrl+X
//                               </td>
//                             </tr>
//                             <tr
//                               className={`hover:bg-[#000080] hover:text-white cursor-pointer ${!selectionState ? "opacity-50 pointer-events-none" : ""}`}
//                               onClick={() => {
//                                 copySelection();
//                                 setOpenMenu(null);
//                               }}
//                             >
//                               <td className="px-3 py-1">
//                                 <span className="underline">C</span>opy
//                               </td>
//                               <td className="text-[10px] text-right pr-2">
//                                 Ctrl+C
//                               </td>
//                             </tr>
//                             <tr
//                               className={`hover:bg-[#000080] hover:text-white cursor-pointer ${!hasClipboard ? "opacity-50 pointer-events-none" : ""}`}
//                               onClick={() => {
//                                 pasteClipboard();
//                                 setOpenMenu(null);
//                               }}
//                             >
//                               <td className="px-3 py-1">
//                                 <span className="underline">P</span>aste
//                               </td>
//                               <td className="text-[10px] text-right pr-2">
//                                 Ctrl+V
//                               </td>
//                             </tr>
//                             <tr className="border-t border-[#808080]">
//                               <td colSpan={2} className="p-0" />
//                             </tr>
//                             <tr
//                               className="hover:bg-[#000080] hover:text-white cursor-pointer"
//                               onClick={() => {
//                                 selectAll();
//                                 setOpenMenu(null);
//                               }}
//                             >
//                               <td className="px-3 py-1">
//                                 Select <span className="underline">A</span>ll
//                               </td>
//                               <td className="text-[10px] text-right pr-2">
//                                 Ctrl+A
//                               </td>
//                             </tr>
//                           </>
//                         )}
//                         {menuKey === "view" && (
//                           <>
//                             <tr
//                               className="hover:bg-[#000080] hover:text-white cursor-pointer"
//                               onClick={() => {
//                                 setShowToolBox(!showToolBox);
//                                 setOpenMenu(null);
//                               }}
//                             >
//                               <td className="px-3 py-1">
//                                 {showToolBox ? "✓" : ""}{" "}
//                                 <span className="underline">T</span>ool Box
//                               </td>
//                               <td className="text-[10px] text-right pr-2">
//                                 Ctrl+T
//                               </td>
//                             </tr>
//                             <tr
//                               className="hover:bg-[#000080] hover:text-white cursor-pointer"
//                               onClick={() => {
//                                 setShowColorBox(!showColorBox);
//                                 setOpenMenu(null);
//                               }}
//                             >
//                               <td className="px-3 py-1">
//                                 {showColorBox ? "✓" : ""}{" "}
//                                 <span className="underline">C</span>olor Box
//                               </td>
//                               <td className="text-[10px] text-right pr-2">
//                                 Ctrl+L
//                               </td>
//                             </tr>
//                             <tr
//                               className="hover:bg-[#000080] hover:text-white cursor-pointer"
//                               onClick={() => {
//                                 setShowStatusBar(!showStatusBar);
//                                 setOpenMenu(null);
//                               }}
//                             >
//                               <td className="px-3 py-1">
//                                 {showStatusBar ? "✓" : ""}{" "}
//                                 <span className="underline">S</span>tatus Bar
//                               </td>
//                               <td className="text-[10px] text-right pr-2" />
//                             </tr>
//                             <tr className="border-t border-[#808080]">
//                               <td colSpan={2} className="p-0" />
//                             </tr>
//                             <tr
//                               className="hover:bg-[#000080] hover:text-white cursor-pointer"
//                               onClick={() => {
//                                 setZoom(1);
//                                 setOpenMenu(null);
//                               }}
//                             >
//                               <td className="px-3 py-1">100% Zoom</td>
//                               <td className="text-[10px] text-right pr-2" />
//                             </tr>
//                             <tr
//                               className="hover:bg-[#000080] hover:text-white cursor-pointer"
//                               onClick={() => {
//                                 setZoom(2);
//                                 setOpenMenu(null);
//                               }}
//                             >
//                               <td className="px-3 py-1">200% Zoom</td>
//                               <td className="text-[10px] text-right pr-2" />
//                             </tr>
//                           </>
//                         )}
//                         {menuKey === "image" && (
//                           <>
//                             <tr
//                               className="hover:bg-[#000080] hover:text-white cursor-pointer"
//                               onClick={() => {
//                                 flipCanvas("h");
//                                 setOpenMenu(null);
//                               }}
//                             >
//                               <td className="px-3 py-1">
//                                 Flip <span className="underline">H</span>
//                                 orizontal
//                               </td>
//                               <td className="text-[10px] text-right pr-2" />
//                             </tr>
//                             <tr
//                               className="hover:bg-[#000080] hover:text-white cursor-pointer"
//                               onClick={() => {
//                                 flipCanvas("v");
//                                 setOpenMenu(null);
//                               }}
//                             >
//                               <td className="px-3 py-1">
//                                 Flip <span className="underline">V</span>ertical
//                               </td>
//                               <td className="text-[10px] text-right pr-2" />
//                             </tr>
//                             <tr
//                               className="hover:bg-[#000080] hover:text-white cursor-pointer"
//                               onClick={() => {
//                                 rotateCanvas("cw");
//                                 setOpenMenu(null);
//                               }}
//                             >
//                               <td className="px-3 py-1">
//                                 Rotate 90° <span className="underline">C</span>W
//                               </td>
//                               <td className="text-[10px] text-right pr-2" />
//                             </tr>
//                             <tr
//                               className="hover:bg-[#000080] hover:text-white cursor-pointer"
//                               onClick={() => {
//                                 invertColors();
//                                 setOpenMenu(null);
//                               }}
//                             >
//                               <td className="px-3 py-1">
//                                 <span className="underline">I</span>nvert Colors
//                               </td>
//                               <td className="text-[10px] text-right pr-2">
//                                 Ctrl+I
//                               </td>
//                             </tr>
//                             <tr
//                               className="hover:bg-[#000080] hover:text-white cursor-pointer"
//                               onClick={() => {
//                                 clearCanvas();
//                                 setOpenMenu(null);
//                               }}
//                             >
//                               <td className="px-3 py-1">Clear Image</td>
//                               <td className="text-[10px] text-right pr-2" />
//                             </tr>
//                           </>
//                         )}
//                         {menuKey === "colors" && (
//                           <tr
//                             className="hover:bg-[#000080] hover:text-white cursor-pointer"
//                             onClick={() => {
//                               const p = primaryColor;
//                               setPrimaryColor(secondaryColor);
//                               setSecondaryColor(p);
//                               setOpenMenu(null);
//                             }}
//                           >
//                             <td className="px-3 py-1">
//                               Swap Primary / Secondary
//                             </td>
//                             <td className="text-[10px] text-right pr-2" />
//                           </tr>
//                         )}
//                         {menuKey === "help" && (
//                           <tr
//                             className="hover:bg-[#000080] hover:text-white cursor-pointer"
//                             onClick={() => {
//                               setActiveDialog("about");
//                               setOpenMenu(null);
//                             }}
//                           >
//                             <td className="px-3 py-1">About Paint</td>
//                             <td className="text-[10px] text-right pr-2" />
//                           </tr>
//                         )}
//                       </tbody>
//                     </table>
//                   </div>
//                 )}
//               </div>
//             ),
//           )}
//         </div>

//         {/* 3. OPTIONAL FLOATING TEXT TOOLBAR */}
//         {showFontBox && (selectedTool === "text" || activeTextBox) && (
//           <div className="flex items-center gap-1 bg-[#c0c0c0] border-b border-[#808080] px-2 py-1 text-[11px] overflow-x-auto shrink-0 z-40">
//             <span className="font-bold text-gray-700">Font:</span>
//             <select
//               value={textFont}
//               onChange={(e) => setTextFont(e.target.value)}
//               className="border border-[#808080] bg-white text-black px-1 py-[1px] text-[11px]"
//             >
//               <option value="Arial">Arial</option>
//               <option value="Times New Roman">Times New Roman</option>
//               <option value="Courier New">Courier New</option>
//             </select>
//             <select
//               value={textSize}
//               onChange={(e) => setTextSize(Number(e.target.value))}
//               className="border border-[#808080] bg-white text-black px-1 py-[1px] text-[11px]"
//             >
//               {[8, 9, 10, 11, 12, 14, 16, 18, 20, 24, 28, 36].map((s) => (
//                 <option key={s} value={s}>
//                   {s}
//                 </option>
//               ))}
//             </select>
//             <button
//               onClick={() => setTextBold(!textBold)}
//               className={`w-5 h-5 font-bold border ${textBold ? "border-[#808080] bg-[#dfdfdf]" : "border-white"}`}
//             >
//               B
//             </button>
//             <button
//               onClick={() => setTextItalic(!textItalic)}
//               className={`w-5 h-5 italic border ${textItalic ? "border-[#808080] bg-[#dfdfdf]" : "border-white"}`}
//             >
//               I
//             </button>
//             <button
//               onClick={() => setTextUnderline(!textUnderline)}
//               className={`w-5 h-5 underline border ${textUnderline ? "border-[#808080] bg-[#dfdfdf]" : "border-white"}`}
//             >
//               U
//             </button>
//           </div>
//         )}

//         {/* 4. CANVAS AREA (FULL WIDTH ABOVE BOTTOM BAR) */}
//         <div className="canvas-area flex-1 bg-[#808080] overflow-auto p-3 relative flex items-center justify-center touch-none">
//           <div
//             className="relative bg-white select-none shrink-0"
//             style={{
//               width: canvasSize.width * zoom,
//               height: canvasSize.height * zoom,
//             }}
//           >
//             <canvas
//               ref={canvasRef}
//               width={canvasSize.width}
//               height={canvasSize.height}
//               className="absolute top-0 left-0"
//               style={{
//                 width: canvasSize.width * zoom,
//                 height: canvasSize.height * zoom,
//                 imageRendering: zoom > 1 ? "pixelated" : "auto",
//                 cursor: selectedTool === "picker" ? "crosshair" : "default",
//               }}
//               onPointerDown={handlePointerDown}
//               onPointerMove={handlePointerMove}
//               onPointerUp={handlePointerUp}
//               onDoubleClick={() =>
//                 selectedTool === "polygon" && commitPolygon()
//               }
//             />

//             <canvas
//               ref={previewCanvasRef}
//               width={canvasSize.width}
//               height={canvasSize.height}
//               className="absolute top-0 left-0 pointer-events-none"
//               style={{
//                 width: canvasSize.width * zoom,
//                 height: canvasSize.height * zoom,
//                 imageRendering: zoom > 1 ? "pixelated" : "auto",
//               }}
//             />

//             {/* FLOATING DRAGGABLE SELECTION OVERLAY */}
//             {selectionState && selectionState.isFloating && (
//               <div
//                 className="absolute cursor-move select-none z-30"
//                 style={{
//                   left: selectionState.x * zoom,
//                   top: selectionState.y * zoom,
//                   width: selectionState.w * zoom,
//                   height: selectionState.h * zoom,
//                   touchAction: "none",
//                 }}
//                 onPointerDown={(e) => {
//                   e.stopPropagation();
//                   e.target.setPointerCapture?.(e.pointerId);
//                   isDraggingSelectionRef.current = true;
//                   const pos = getCanvasCoords(e);
//                   selectionDragOffsetRef.current = {
//                     x: pos.x - selectionState.x,
//                     y: pos.y - selectionState.y,
//                   };
//                 }}
//                 onPointerMove={handlePointerMove}
//                 onPointerUp={() => {
//                   isDraggingSelectionRef.current = false;
//                 }}
//               >
//                 <img
//                   src={(() => {
//                     const c = document.createElement("canvas");
//                     c.width = selectionState.w;
//                     c.height = selectionState.h;
//                     c.getContext("2d").putImageData(
//                       selectionState.imgData,
//                       0,
//                       0,
//                     );
//                     return c.toDataURL();
//                   })()}
//                   alt="selection"
//                   draggable={false}
//                   className="w-full h-full pointer-events-none border border-dashed border-black block"
//                   style={{ imageRendering: zoom > 1 ? "pixelated" : "auto" }}
//                 />

//                 <div className="pointer-events-none absolute -left-1 -top-1 w-1.5 h-1.5 bg-black border border-white" />
//                 <div className="pointer-events-none absolute left-1/2 -top-1 -translate-x-1/2 w-1.5 h-1.5 bg-black border border-white" />
//                 <div className="pointer-events-none absolute -right-1 -top-1 w-1.5 h-1.5 bg-black border border-white" />
//                 <div className="pointer-events-none absolute -right-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-black border border-white" />
//                 <div className="pointer-events-none absolute -right-1 -bottom-1 w-1.5 h-1.5 bg-black border border-white" />
//                 <div className="pointer-events-none absolute left-1/2 -bottom-1 -translate-x-1/2 w-1.5 h-1.5 bg-black border border-white" />
//                 <div className="pointer-events-none absolute -left-1 -bottom-1 w-1.5 h-1.5 bg-black border border-white" />
//                 <div className="pointer-events-none absolute -left-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-black border border-white" />
//               </div>
//             )}

//             {/* FLOATING TEXT BOX */}
//             {activeTextBox && (
//               <div
//                 className="absolute z-20"
//                 style={{
//                   left: activeTextBox.x * zoom,
//                   top: activeTextBox.y * zoom,
//                   width: activeTextBox.width * zoom,
//                   height: activeTextBox.height * zoom,
//                 }}
//               >
//                 <textarea
//                   ref={textInputRef}
//                   value={activeTextBox.text}
//                   onChange={(e) =>
//                     setActiveTextBox({ ...activeTextBox, text: e.target.value })
//                   }
//                   onBlur={commitTextToCanvas}
//                   className="w-full h-full p-1 resize border border-dashed border-black outline-none bg-transparent"
//                   style={{
//                     fontFamily: textFont,
//                     fontSize: `${textSize * zoom}px`,
//                     fontWeight: textBold ? "bold" : "normal",
//                     fontStyle: textItalic ? "italic" : "normal",
//                     textDecoration: textUnderline ? "underline" : "none",
//                     color: primaryColor,
//                     backgroundColor: !isTransparentDraw
//                       ? secondaryColor
//                       : "transparent",
//                   }}
//                   autoFocus
//                 />
//               </div>
//             )}

//             {/* CANVAS RESIZE HANDLES */}
//             <div
//               className="handle absolute -right-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#000080] border border-white cursor-ew-resize"
//               onPointerDown={(e) => startCanvasResize("e", e)}
//             />
//             <div
//               className="handle absolute left-1/2 -bottom-1 -translate-x-1/2 w-1.5 h-1.5 bg-[#000080] border border-white cursor-ns-resize"
//               onPointerDown={(e) => startCanvasResize("s", e)}
//             />
//             <div
//               className="handle absolute -right-1 -bottom-1 w-1.5 h-1.5 bg-[#000080] border border-white cursor-nwse-resize"
//               onPointerDown={(e) => startCanvasResize("se", e)}
//             />
//           </div>
//         </div>

//         {/* 5. UNIFIED BOTTOM CONTROL BAR (TOOLS + OPTIONS + COLOR PALETTE) */}
//         {(showToolBox || showColorBox) && (
//           <div className="component-area shrink-0 bg-[#c0c0c0] border-t border-[#808080] z-20 overflow-x-auto select-none scrollbar-thin">
//             <div className="flex items-center gap-2 p-1 min-w-max">
//               {/* Bottom Tools Grid & Options */}
//               {showToolBox && (
//                 <div className="flex items-center gap-1.5 pr-2 border-r border-[#808080]">
//                   {/* 2-Row Horizontal Tool Matrix */}
//                   <div className="grid grid-rows-2 grid-flow-col gap-[2px] bg-[#c0c0c0]">
//                     {TOOLS_CONFIG.map((t) => (
//                       <div
//                         key={t.id}
//                         title={t.name}
//                         onClick={() => handleToolSelect(t.id, t.name)}
//                         className={`tool w-[22px] h-[22px] flex items-center justify-center cursor-pointer ${
//                           selectedTool === t.id
//                             ? "border-2 border-t-[#808080] border-l-[#808080] border-r-[#ffffff] border-b-[#ffffff] bg-[#dfdfdf]"
//                             : "border-2 border-t-[#ffffff] border-l-[#ffffff] border-r-[#808080] border-b-[#808080] active:border-[#808080]"
//                         }`}
//                       >
//                         {t.icon}
//                       </div>
//                     ))}
//                   </div>

//                   {/* Tool Options Tray */}
//                   <div className="tool-options w-[52px] h-[46px] border-2 border-t-[#808080] border-l-[#808080] border-r-[#ffffff] border-b-[#ffffff] bg-[#c0c0c0] flex items-center justify-center p-1 shrink-0">
//                     {["rectSelect", "freeSelect", "text"].includes(
//                       selectedTool,
//                     ) && (
//                       <div className="flex flex-col gap-1 items-center w-full">
//                         <div
//                           onClick={() => setIsTransparentDraw(false)}
//                           className={`w-full py-[2px] flex justify-center cursor-pointer ${!isTransparentDraw ? "bg-[#000080]" : ""}`}
//                           title="Opaque"
//                         >
//                           <div className="w-7 h-2.5 border border-black bg-white" />
//                         </div>
//                         <div
//                           onClick={() => setIsTransparentDraw(true)}
//                           className={`w-full py-[2px] flex justify-center cursor-pointer ${isTransparentDraw ? "bg-[#000080]" : ""}`}
//                           title="Transparent"
//                         >
//                           <div className="w-7 h-2.5 border border-dashed border-black bg-transparent" />
//                         </div>
//                       </div>
//                     )}
//                     {selectedTool === "eraser" && (
//                       <div className="flex flex-col gap-1 items-center">
//                         {[4, 6, 8, 10].map((sz) => (
//                           <div
//                             key={sz}
//                             onClick={() => setEraserSize(sz)}
//                             className={`cursor-pointer p-0.5 ${eraserSize === sz ? "bg-[#000080]" : ""}`}
//                           >
//                             <div
//                               style={{ width: sz, height: sz }}
//                               className="bg-black border border-black"
//                             />
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                     {["line", "curve", "pencil"].includes(selectedTool) && (
//                       <div className="flex flex-col gap-1 items-center w-full px-1">
//                         {[1, 2, 3, 5].map((w) => (
//                           <div
//                             key={w}
//                             onClick={() => setLineWidth(w)}
//                             className={`w-full cursor-pointer h-1.5 flex items-center ${lineWidth === w ? "bg-[#000080]" : ""}`}
//                           >
//                             <div
//                               style={{ height: w }}
//                               className="w-full bg-black"
//                             />
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                     {["brush"].includes(selectedTool) && (
//                       <div className="grid grid-cols-2 gap-1 items-center">
//                         <div
//                           onClick={() => setBrushShape("round-small")}
//                           className={`w-3.5 h-3.5 flex items-center justify-center cursor-pointer ${brushShape === "round-small" ? "bg-[#000080]" : ""}`}
//                         >
//                           <div className="w-1.5 h-1.5 rounded-full bg-black" />
//                         </div>
//                         <div
//                           onClick={() => setBrushShape("round-medium")}
//                           className={`w-3.5 h-3.5 flex items-center justify-center cursor-pointer ${brushShape === "round-medium" ? "bg-[#000080]" : ""}`}
//                         >
//                           <div className="w-2 rounded-full bg-black h-2" />
//                         </div>
//                         <div
//                           onClick={() => setBrushShape("round-large")}
//                           className={`w-3.5 h-3.5 flex items-center justify-center cursor-pointer ${brushShape === "round-large" ? "bg-[#000080]" : ""}`}
//                         >
//                           <div className="w-2.5 h-2.5 rounded-full bg-black" />
//                         </div>
//                         <div
//                           onClick={() => setBrushShape("square-medium")}
//                           className={`w-3.5 h-3.5 flex items-center justify-center cursor-pointer ${brushShape === "square-medium" ? "bg-[#000080]" : ""}`}
//                         >
//                           <div className="w-2 h-2 bg-black" />
//                         </div>
//                       </div>
//                     )}
//                     {[
//                       "rectangle",
//                       "ellipse",
//                       "roundedRect",
//                       "polygon",
//                     ].includes(selectedTool) && (
//                       <div className="flex flex-col gap-1 items-center w-full">
//                         <div
//                           onClick={() => setShapeStyle("outline")}
//                           className={`cursor-pointer p-0.5 ${shapeStyle === "outline" ? "bg-[#000080]" : ""}`}
//                           title="Outline"
//                         >
//                           <div className="w-6 h-1.5 border border-black bg-transparent" />
//                         </div>
//                         <div
//                           onClick={() => setShapeStyle("filled-outline")}
//                           className={`cursor-pointer p-0.5 ${shapeStyle === "filled-outline" ? "bg-[#000080]" : ""}`}
//                           title="Filled Outline"
//                         >
//                           <div className="w-6 h-1.5 border border-black bg-gray-400" />
//                         </div>
//                         <div
//                           onClick={() => setShapeStyle("filled")}
//                           className={`cursor-pointer p-0.5 ${shapeStyle === "filled" ? "bg-[#000080]" : ""}`}
//                           title="Filled Solid"
//                         >
//                           <div className="w-6 h-1.5 bg-black" />
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               )}

//               {/* Bottom Color Swatches & 28-Palette Grid */}
//               {showColorBox && (
//                 <div className="flex items-center gap-1.5">
//                   <div className="relative w-[30px] h-[30px] border-2 border-t-[#808080] border-l-[#808080] border-r-[#ffffff] border-b-[#ffffff] bg-[#c0c0c0] p-[2px] shrink-0">
//                     <div
//                       className="absolute right-0.5 bottom-0.5 w-[13px] h-[13px] border border-black shadow-inner cursor-pointer"
//                       style={{ backgroundColor: secondaryColor }}
//                       title="Secondary Color (Right Click swatch to set)"
//                     />
//                     <div
//                       className="absolute left-0.5 top-0.5 w-[13px] h-[13px] border border-black shadow-inner z-10 cursor-pointer"
//                       style={{ backgroundColor: primaryColor }}
//                       title="Primary Color (Left Click swatch to set)"
//                     />
//                   </div>

//                   <div className="palette grid grid-rows-2 grid-flow-col gap-[1px] bg-[#808080] p-[1px] border border-t-[#808080] border-l-[#808080] border-r-[#ffffff] border-b-[#ffffff] shrink-0">
//                     {PALETTE_COLORS.map((col, idx) => (
//                       <div
//                         key={idx}
//                         className="relative w-[13px] h-[13px] border border-t-[#808080] border-l-[#808080] border-r-[#ffffff] border-b-[#ffffff] active:border-black cursor-pointer overflow-hidden"
//                         style={{ backgroundColor: col }}
//                         onClick={() => setPrimaryColor(col)}
//                         onContextMenu={(e) => {
//                           e.preventDefault();
//                           setSecondaryColor(col);
//                         }}
//                       >
//                         <input
//                           type="color"
//                           defaultValue={col}
//                           onChange={(e) => setPrimaryColor(e.target.value)}
//                           className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
//                           title="Click to select, double click to custom pick"
//                         />
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         )}

//         {/* 6. STATUS BAR */}
//         {showStatusBar && (
//           <div className="status-area h-[20px] bg-[#c0c0c0] border-t border-[#808080] flex items-center px-1 text-[10px] select-none shrink-0 gap-1">
//             <div className="status-text flex-1 h-[16px] px-2 flex items-center border border-t-[#808080] border-l-[#808080] border-r-[#ffffff] border-b-[#ffffff] truncate">
//               {statusMessage}
//             </div>
//             <div className="status-coordinates hidden sm:flex w-[80px] h-[16px] px-1 items-center border border-t-[#808080] border-l-[#808080] border-r-[#ffffff] border-b-[#ffffff]">
//               {cursorPos.x !== null ? `${cursorPos.x}, ${cursorPos.y}` : ""}
//             </div>
//             <div className="status-coordinates w-[80px] sm:w-[90px] h-[16px] px-1 flex items-center border border-t-[#808080] border-l-[#808080] border-r-[#ffffff] border-b-[#ffffff]">
//               {selectionDim
//                 ? `${selectionDim.w}x${selectionDim.h}`
//                 : `${canvasSize.width}x${canvasSize.height}px`}
//             </div>
//           </div>
//         )}

//         {/* 7. DIALOGS */}
//         {activeDialog === "newConfirm" && (
//           <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-[100] p-3">
//             <div className="w-full max-w-[280px] bg-[#c0c0c0] border-2 border-t-[#ffffff] border-l-[#ffffff] border-r-[#808080] border-b-[#808080] shadow-[2px_2px_0px_#000] p-1 text-[11px]">
//               <div className="bg-[#000080] text-white font-bold px-2 py-1 flex justify-between items-center mb-2">
//                 <span>Paint</span>
//                 <button
//                   onClick={() => setActiveDialog(null)}
//                   className="bg-[#c0c0c0] text-black w-4 h-4 flex items-center justify-center font-bold"
//                 >
//                   ×
//                 </button>
//               </div>
//               <div className="p-3">
//                 <p className="mb-4">Create new blank image?</p>
//                 <div className="flex justify-end gap-2">
//                   <button
//                     onClick={() => {
//                       const canvas = canvasRef.current;
//                       const ctx = canvas.getContext("2d", {
//                         willReadFrequently: true,
//                       });
//                       ctx.fillStyle = "#ffffff";
//                       ctx.fillRect(0, 0, canvas.width, canvas.height);
//                       saveSnapshot();
//                       setActiveDialog(null);
//                     }}
//                     className="px-4 py-1 border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080] active:border-black bg-[#c0c0c0]"
//                   >
//                     Yes
//                   </button>
//                   <button
//                     onClick={() => setActiveDialog(null)}
//                     className="px-3 py-1 border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080] active:border-black bg-[#c0c0c0]"
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {activeDialog === "about" && (
//           <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-[100] p-3">
//             <div className="w-full max-w-[320px] bg-[#c0c0c0] border-2 border-t-[#ffffff] border-l-[#ffffff] border-r-[#808080] border-b-[#808080] shadow-[2px_2px_0px_#000] p-1 text-[11px]">
//               <div className="bg-[#000080] text-white font-bold px-2 py-1 flex justify-between items-center mb-2">
//                 <span>About Paint</span>
//                 <button
//                   onClick={() => setActiveDialog(null)}
//                   className="bg-[#c0c0c0] text-black w-4 h-4 flex items-center justify-center font-bold"
//                 >
//                   ×
//                 </button>
//               </div>
//               <div className="p-3">
//                 <p className="font-bold mb-1">React MS Paint</p>
//                 <p className="text-gray-700 mb-4">
//                   Complete retro drawing suite with image transformations,
//                   Bezier curves, polygon editor, and floating typography.
//                 </p>
//                 <div className="flex justify-end">
//                   <button
//                     onClick={() => setActiveDialog(null)}
//                     className="px-4 py-1 border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080] active:border-black bg-[#c0c0c0]"
//                   >
//                     OK
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


import React, { useState, useRef, useEffect, useCallback } from "react";

// ==========================================
// 1. CLASSIC 28-COLOR PALETTE DEFINITIONS
// ==========================================
const PALETTE_COLORS = [
  "#000000",
  "#808080",
  "#800000",
  "#808000",
  "#008000",
  "#008080",
  "#000080",
  "#800080",
  "#808040",
  "#004040",
  "#0080ff",
  "#004080",
  "#8000ff",
  "#804000",
  "#ffffff",
  "#c0c0c0",
  "#ff0000",
  "#ffff00",
  "#00ff00",
  "#00ffff",
  "#0000ff",
  "#ff00ff",
  "#ffff80",
  "#00ff80",
  "#80ffff",
  "#8080ff",
  "#ff0080",
  "#ff8040",
];

// ==========================================
// 2. RETRO VECTOR TOOL ICONS
// ==========================================
const ToolIcons = {
  freeSelect: (
    <svg width="16" height="16" viewBox="0 0 16 16">
      <polygon
        points="4,2 6,6 10,4 8,9 13,8 10,13 5,12 2,8"
        fill="none"
        stroke="#000"
        strokeWidth="1"
        strokeDasharray="1,1"
      />
      <polygon points="12,2 14,5 11,4" fill="#000" />
    </svg>
  ),
  rectSelect: (
    <svg width="16" height="16" viewBox="0 0 16 16">
      <rect
        x="2.5"
        y="2.5"
        width="11"
        height="11"
        fill="none"
        stroke="#000"
        strokeWidth="1"
        strokeDasharray="2,2"
      />
    </svg>
  ),
  eraser: (
    <svg width="16" height="16" viewBox="0 0 16 16">
      <path
        d="M4,10 L10,4 L14,8 L8,14 Z"
        fill="#ffb0b0"
        stroke="#000"
        strokeWidth="1"
      />
      <path
        d="M4,10 L8,14 L6,14 L2,10 Z"
        fill="#ffffff"
        stroke="#000"
        strokeWidth="1"
      />
      <line x1="7" y1="7" x2="11" y2="11" stroke="#000" strokeWidth="1" />
    </svg>
  ),
  fill: (
    <svg width="16" height="16" viewBox="0 0 16 16">
      <path
        d="M9,2 L14,7 L9,12 L4,7 Z"
        fill="#0080ff"
        stroke="#000"
        strokeWidth="1"
      />
      <path d="M12,5 L14,3" stroke="#808080" strokeWidth="1.5" />
      <path d="M3,11 Q2,14 4,14 Q6,14 5,11 Z" fill="#0080ff" />
    </svg>
  ),
  picker: (
    <svg width="16" height="16" viewBox="0 0 16 16">
      <path
        d="M12,2 L14,4 L11,7 L10,6 L4,12 L2,14 L4,12 L5,11 L4,10 L10,4 Z"
        fill="#ffff80"
        stroke="#000"
        strokeWidth="1"
      />
      <line x1="2" y1="14" x2="3" y2="13" stroke="#000" strokeWidth="1.5" />
    </svg>
  ),
  magnifier: (
    <svg width="16" height="16" viewBox="0 0 16 16">
      <circle
        cx="6.5"
        cy="6.5"
        r="4"
        fill="#c0ffff"
        stroke="#000"
        strokeWidth="1.5"
      />
      <line x1="9.5" y1="9.5" x2="14" y2="14" stroke="#000" strokeWidth="2.5" />
      <circle cx="5.5" cy="5.5" r="1.5" fill="#ffffff" />
    </svg>
  ),
  pencil: (
    <svg width="16" height="16" viewBox="0 0 16 16">
      <path
        d="M11,2 L14,5 L5,14 L2,14 L2,11 Z"
        fill="#ffff00"
        stroke="#000"
        strokeWidth="1"
      />
      <polygon points="2,14 2,12 4,14" fill="#000" />
      <line x1="9" y1="4" x2="12" y2="7" stroke="#ff8080" strokeWidth="1" />
    </svg>
  ),
  brush: (
    <svg width="16" height="16" viewBox="0 0 16 16">
      <path
        d="M11,2 L14,5 L8,11 L6,9 Z"
        fill="#804000"
        stroke="#000"
        strokeWidth="1"
      />
      <path
        d="M6,9 L8,11 L5,14 C3,14 2,13 3,11 Z"
        fill="#0000ff"
        stroke="#000"
        strokeWidth="1"
      />
      <rect x="7" y="7" width="3" height="3" fill="#c0c0c0" />
    </svg>
  ),
  airbrush: (
    <svg width="16" height="16" viewBox="0 0 16 16">
      <rect
        x="6"
        y="6"
        width="6"
        height="8"
        fill="#00ff00"
        stroke="#000"
        strokeWidth="1"
      />
      <polygon
        points="6,6 9,2 12,6"
        fill="#c0c0c0"
        stroke="#000"
        strokeWidth="1"
      />
      <circle cx="3" cy="2" r="0.75" fill="#000" />
      <circle cx="5" cy="1" r="0.75" fill="#000" />
      <circle cx="2" cy="4" r="0.75" fill="#000" />
      <circle cx="4" cy="4" r="0.75" fill="#000" />
    </svg>
  ),
  text: (
    <svg width="16" height="16" viewBox="0 0 16 16">
      <text
        x="3"
        y="13"
        fontFamily="Times New Roman, serif"
        fontSize="14"
        fontWeight="bold"
        fill="#000"
      >
        A
      </text>
    </svg>
  ),
  line: (
    <svg width="16" height="16" viewBox="0 0 16 16">
      <line x1="2" y1="14" x2="14" y2="2" stroke="#000" strokeWidth="1.5" />
    </svg>
  ),
  curve: (
    <svg width="16" height="16" viewBox="0 0 16 16">
      <path
        d="M2,13 Q4,2 8,8 T14,3"
        fill="none"
        stroke="#000"
        strokeWidth="1.5"
      />
    </svg>
  ),
  rectangle: (
    <svg width="16" height="16" viewBox="0 0 16 16">
      <rect
        x="2.5"
        y="3.5"
        width="11"
        height="9"
        fill="none"
        stroke="#000"
        strokeWidth="1.5"
      />
    </svg>
  ),
  polygon: (
    <svg width="16" height="16" viewBox="0 0 16 16">
      <polygon
        points="2,12 5,3 13,5 14,12 8,14"
        fill="none"
        stroke="#000"
        strokeWidth="1.5"
      />
    </svg>
  ),
  ellipse: (
    <svg width="16" height="16" viewBox="0 0 16 16">
      <ellipse
        cx="8"
        cy="8"
        rx="6"
        ry="4.5"
        fill="none"
        stroke="#000"
        strokeWidth="1.5"
      />
    </svg>
  ),
  roundedRect: (
    <svg width="16" height="16" viewBox="0 0 16 16">
      <rect
        x="2.5"
        y="3.5"
        width="11"
        height="9"
        rx="3"
        ry="3"
        fill="none"
        stroke="#000"
        strokeWidth="1.5"
      />
    </svg>
  ),
};

const TOOLS_CONFIG = [
  { id: "freeSelect", name: "Free-Form Select", icon: ToolIcons.freeSelect },
  { id: "rectSelect", name: "Select", icon: ToolIcons.rectSelect },
  { id: "eraser", name: "Eraser/Color Eraser", icon: ToolIcons.eraser },
  { id: "fill", name: "Fill With Color", icon: ToolIcons.fill },
  { id: "picker", name: "Pick Color", icon: ToolIcons.picker },
  { id: "magnifier", name: "Magnifier", icon: ToolIcons.magnifier },
  { id: "pencil", name: "Pencil", icon: ToolIcons.pencil },
  { id: "brush", name: "Brush", icon: ToolIcons.brush },
  { id: "airbrush", name: "Airbrush", icon: ToolIcons.airbrush },
  { id: "text", name: "Text", icon: ToolIcons.text },
  { id: "line", name: "Line", icon: ToolIcons.line },
  { id: "curve", name: "Curve", icon: ToolIcons.curve },
  { id: "rectangle", name: "Rectangle", icon: ToolIcons.rectangle },
  { id: "polygon", name: "Polygon", icon: ToolIcons.polygon },
  { id: "ellipse", name: "Ellipse", icon: ToolIcons.ellipse },
  { id: "roundedRect", name: "Rounded Rectangle", icon: ToolIcons.roundedRect },
];

export default function Paint() {
  const [canvasSize, setCanvasSize] = useState({ width: 560, height: 320 });
  const [zoom, setZoom] = useState(1);
  const [selectedTool, setSelectedTool] = useState("brush");
  const [primaryColor, setPrimaryColor] = useState("#000000");
  const [secondaryColor, setSecondaryColor] = useState("#ffffff");

  // Tool options
  const [lineWidth, setLineWidth] = useState(1);
  const [eraserSize, setEraserSize] = useState(8);
  const [brushShape, setBrushShape] = useState("round-medium");
  const [airbrushSize, setAirbrushSize] = useState(12);
  const [shapeStyle, setShapeStyle] = useState("outline");
  const [isTransparentDraw, setIsTransparentDraw] = useState(false);

  // Typography options
  const [textFont, setTextFont] = useState("Arial");
  const [textSize, setTextSize] = useState(12);
  const [textBold, setTextBold] = useState(false);
  const [textItalic, setTextItalic] = useState(false);
  const [textUnderline, setTextUnderline] = useState(false);
  const [activeTextBox, setActiveTextBox] = useState(null);

  // UI state
  const [showToolBox, setShowToolBox] = useState(true);
  const [showColorBox, setShowColorBox] = useState(true);
  const [showStatusBar, setShowStatusBar] = useState(true);
  const [showFontBox, setShowFontBox] = useState(true);

  // Menus & Modals
  const [openMenu, setOpenMenu] = useState(null);
  const [activeDialog, setActiveDialog] = useState(null);
  const [dialogState, setDialogState] = useState({ width: 560, height: 320 });

  // Status telemetry
  const [cursorPos, setCursorPos] = useState({ x: null, y: null });
  const [selectionDim, setSelectionDim] = useState(null);
  const [statusMessage, setStatusMessage] = useState("Draws using a brush with selected shape and size.");

  // DOM Refs
  const canvasRef = useRef(null);
  const previewCanvasRef = useRef(null);
  const fileInputRef = useRef(null);
  const textInputRef = useRef(null);
  const menuBarRef = useRef(null);

  // History tracking
  const historyRef = useRef([]);
  const historyIndexRef = useRef(-1);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [historyLength, setHistoryLength] = useState(0);

  // Drawing tracking
  const isDrawingRef = useRef(false);
  const startPosRef = useRef({ x: 0, y: 0 });
  const lastPosRef = useRef({ x: 0, y: 0 });
  const currentButtonRef = useRef(0);
  const curveStepRef = useRef(0);
  const curvePointsRef = useRef({ p0: null, p1: null, p2: null, p3: null });
  const polygonPointsRef = useRef([]);
  const lastClickTimeRef = useRef(0);

  // Floating selection
  const selectionRef = useRef(null);
  const [selectionState, setSelectionState] = useState(null);
  const isDraggingSelectionRef = useRef(false);
  const selectionDragOffsetRef = useRef({ x: 0, y: 0 });

  // Canvas edge resizing
  const isResizingCanvasRef = useRef(null);
  const resizeStartDimRef = useRef({
    width: 560,
    height: 320,
    startX: 0,
    startY: 0,
  });

  // Internal clipboard
  const internalClipboardRef = useRef(null);
  const [hasClipboard, setHasClipboard] = useState(false);

  const hexToRgb = (hex) => {
    let c = hex.replace("#", "");
    if (c.length === 3)
      c = c
        .split("")
        .map((x) => x + x)
        .join("");
    const num = parseInt(c, 16);
    return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255, a: 255 };
  };

  const rgbToHex = (r, g, b) =>
    "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

  const getCanvasCoords = useCallback(
    (e) => {
      const canvas = canvasRef.current;
      if (!canvas) return { x: 0, y: 0 };
      const rect = canvas.getBoundingClientRect();
      const clientX = e.clientX ?? (e.touches && e.touches[0]?.clientX) ?? 0;
      const clientY = e.clientY ?? (e.touches && e.touches[0]?.clientY) ?? 0;
      const x = Math.floor((clientX - rect.left) / zoom);
      const y = Math.floor((clientY - rect.top) / zoom);
      return {
        x: Math.max(0, Math.min(canvas.width - 1, x)),
        y: Math.max(0, Math.min(canvas.height - 1, y)),
      };
    },
    [zoom],
  );

  const saveSnapshot = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    const newHistory = historyRef.current.slice(0, historyIndexRef.current + 1);
    newHistory.push({
      imageData: imgData,
      width: canvas.width,
      height: canvas.height,
    });

    if (newHistory.length > 50) newHistory.shift();
    historyRef.current = newHistory;
    historyIndexRef.current = newHistory.length - 1;
    setHistoryIndex(historyIndexRef.current);
    setHistoryLength(newHistory.length);
  }, []);

  const restoreSnapshot = useCallback((index) => {
    if (index < 0 || index >= historyRef.current.length) return;
    const state = historyRef.current[index];
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (canvas.width !== state.width || canvas.height !== state.height) {
      canvas.width = state.width;
      canvas.height = state.height;
      setCanvasSize({ width: state.width, height: state.height });
    }

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    ctx.putImageData(state.imageData, 0, 0);
    historyIndexRef.current = index;
    setHistoryIndex(index);
  }, []);

  const handleUndo = useCallback(() => {
    if (historyIndexRef.current > 0)
      restoreSnapshot(historyIndexRef.current - 1);
  }, [restoreSnapshot]);

  const handleRedo = useCallback(() => {
    if (historyIndexRef.current < historyRef.current.length - 1)
      restoreSnapshot(historyIndexRef.current + 1);
  }, [restoreSnapshot]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    saveSnapshot();
  }, []);

  useEffect(() => {
    if (previewCanvasRef.current) {
      previewCanvasRef.current.width = canvasSize.width;
      previewCanvasRef.current.height = canvasSize.height;
    }
  }, [canvasSize]);

  useEffect(() => {
    const handleGlobalPointerMove = (e) => {
      if (!isDraggingSelectionRef.current || !selectionRef.current) return;
      const pos = getCanvasCoords(e);
      const sel = selectionRef.current;
      sel.x = pos.x - selectionDragOffsetRef.current.x;
      sel.y = pos.y - selectionDragOffsetRef.current.y;
      setSelectionState({ ...sel });
    };

    const handleGlobalPointerUp = () => {
      if (isDraggingSelectionRef.current) {
        isDraggingSelectionRef.current = false;
      }
    };

    const handleClickOutsideMenu = (e) => {
      if (menuBarRef.current && !menuBarRef.current.contains(e.target)) {
        setOpenMenu(null);
      }
    };

    window.addEventListener("pointermove", handleGlobalPointerMove);
    window.addEventListener("pointerup", handleGlobalPointerUp);
    document.addEventListener("mousedown", handleClickOutsideMenu);

    return () => {
      window.removeEventListener("pointermove", handleGlobalPointerMove);
      window.removeEventListener("pointerup", handleGlobalPointerUp);
      document.removeEventListener("mousedown", handleClickOutsideMenu);
    };
  }, [getCanvasCoords]);

  const floodFill = (startX, startY, fillColorHex) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imgData.data;
    const width = canvas.width;
    const height = canvas.height;

    const targetColor = hexToRgb(fillColorHex);
    const startIndex = (startY * width + startX) * 4;
    const startR = data[startIndex];
    const startG = data[startIndex + 1];
    const startB = data[startIndex + 2];
    const startA = data[startIndex + 3];

    if (
      startR === targetColor.r &&
      startG === targetColor.g &&
      startB === targetColor.b &&
      startA === targetColor.a
    )
      return;

    const queue = [startX, startY];
    const visited = new Uint8Array(width * height);

    while (queue.length > 0) {
      const cy = queue.pop();
      const cx = queue.pop();
      const pos = cy * width + cx;
      if (visited[pos]) continue;
      visited[pos] = 1;

      const idx = pos * 4;
      if (
        data[idx] === startR &&
        data[idx + 1] === startG &&
        data[idx + 2] === startB &&
        data[idx + 3] === startA
      ) {
        data[idx] = targetColor.r;
        data[idx + 1] = targetColor.g;
        data[idx + 2] = targetColor.b;
        data[idx + 3] = 255;

        if (cx > 0 && !visited[pos - 1]) queue.push(cx - 1, cy);
        if (cx < width - 1 && !visited[pos + 1]) queue.push(cx + 1, cy);
        if (cy > 0 && !visited[pos - width]) queue.push(cx, cy - 1);
        if (cy < height - 1 && !visited[pos + width]) queue.push(cx, cy + 1);
      }
    }

    ctx.putImageData(imgData, 0, 0);
    saveSnapshot();
  };

  const drawAirbrush = (ctx, x, y, color, radius) => {
    ctx.fillStyle = color;
    const density = radius * 3;
    for (let i = 0; i < density; i++) {
      const angle = Math.random() * Math.PI * 2;
      const r = Math.random() * radius;
      const px = Math.round(x + r * Math.cos(angle));
      const py = Math.round(y + r * Math.sin(angle));
      ctx.fillRect(px, py, 1, 1);
    }
  };

  // Continuous Brush Stroke with dynamic thickness
  const drawBrushStroke = (ctx, x0, y0, x1, y1, shape, color) => {
    ctx.strokeStyle = color;
    ctx.fillStyle = color;

    let size = 6;
    let isSquare = false;

    if (shape === "round-small") size = 3;
    else if (shape === "round-medium") size = 8;
    else if (shape === "round-large") size = 16;
    else if (shape === "square-medium") {
      size = 10;
      isSquare = true;
    }

    if (isSquare) {
      const dx = Math.abs(x1 - x0);
      const dy = Math.abs(y1 - y0);
      const sx = x0 < x1 ? 1 : -1;
      const sy = y0 < y1 ? 1 : -1;
      let err = dx - dy;
      const half = Math.floor(size / 2);

      let cx = x0;
      let cy = y0;
      while (true) {
        ctx.fillRect(cx - half, cy - half, size, size);
        if (cx === x1 && cy === y1) break;
        const e2 = 2 * err;
        if (e2 > -dy) {
          err -= dy;
          cx += sx;
        }
        if (e2 < dx) {
          err += dx;
          cy += sy;
        }
      }
    } else {
      ctx.lineWidth = size;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.beginPath();
      ctx.moveTo(x0, y0);
      ctx.lineTo(x1, y1);
      ctx.stroke();
    }
  };

  const drawPencilLine = (ctx, x0, y0, x1, y1, color) => {
    ctx.fillStyle = color;
    const dx = Math.abs(x1 - x0);
    const dy = Math.abs(y1 - y0);
    const sx = x0 < x1 ? 1 : -1;
    const sy = y0 < y1 ? 1 : -1;
    let err = dx - dy;

    let cx = x0;
    let cy = y0;
    while (true) {
      ctx.fillRect(cx, cy, 1, 1);
      if (cx === x1 && cy === y1) break;
      const e2 = 2 * err;
      if (e2 > -dy) {
        err -= dy;
        cx += sx;
      }
      if (e2 < dx) {
        err += dx;
        cy += sy;
      }
    }
  };

  const commitSelection = useCallback(() => {
    if (!selectionRef.current || !selectionRef.current.isFloating) return;
    const sel = selectionRef.current;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });

    if (sel.imgData) {
      const tempCanvas = document.createElement("canvas");
      tempCanvas.width = sel.w;
      tempCanvas.height = sel.h;
      const tempCtx = tempCanvas.getContext("2d");
      tempCtx.putImageData(sel.imgData, 0, 0);

      if (isTransparentDraw) {
        const secRgb = hexToRgb(secondaryColor);
        const tempImgData = tempCtx.getImageData(0, 0, sel.w, sel.h);
        for (let i = 0; i < tempImgData.data.length; i += 4) {
          if (
            tempImgData.data[i] === secRgb.r &&
            tempImgData.data[i + 1] === secRgb.g &&
            tempImgData.data[i + 2] === secRgb.b
          ) {
            tempImgData.data[i + 3] = 0;
          }
        }
        tempCtx.putImageData(tempImgData, 0, 0);
      }
      ctx.drawImage(tempCanvas, sel.x, sel.y, sel.w, sel.h);
    }

    selectionRef.current = null;
    setSelectionState(null);
    setSelectionDim(null);
    saveSnapshot();
  }, [saveSnapshot, secondaryColor, isTransparentDraw]);

  const commitTextToCanvas = useCallback(() => {
    if (!activeTextBox || !activeTextBox.text.trim()) {
      setActiveTextBox(null);
      return;
    }
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });

    ctx.save();
    ctx.font = `${textItalic ? "italic " : ""}${textBold ? "bold " : ""}${textSize}px ${textFont}`;
    ctx.textBaseline = "top";

    const lines = activeTextBox.text.split("\n");
    const lineHeight = textSize * 1.25;

    if (!isTransparentDraw) {
      let maxW = 0;
      lines.forEach((l) => {
        const w = ctx.measureText(l).width;
        if (w > maxW) maxW = w;
      });
      ctx.fillStyle = secondaryColor;
      ctx.fillRect(
        activeTextBox.x,
        activeTextBox.y,
        Math.max(maxW + 6, activeTextBox.width),
        lines.length * lineHeight + 6,
      );
    }

    ctx.fillStyle = primaryColor;
    lines.forEach((line, i) => {
      ctx.fillText(
        line,
        activeTextBox.x + 2,
        activeTextBox.y + 2 + i * lineHeight,
      );
      if (textUnderline) {
        const width = ctx.measureText(line).width;
        ctx.fillRect(
          activeTextBox.x + 2,
          activeTextBox.y + 2 + (i + 1) * lineHeight - 2,
          width,
          1,
        );
      }
    });

    ctx.restore();
    setActiveTextBox(null);
    saveSnapshot();
  }, [
    activeTextBox,
    primaryColor,
    secondaryColor,
    textBold,
    textFont,
    textItalic,
    isTransparentDraw,
    textSize,
    textUnderline,
    saveSnapshot,
  ]);

  const commitPolygon = useCallback(() => {
    const pts = polygonPointsRef.current;
    if (pts.length < 2) {
      polygonPointsRef.current = [];
      if (previewCanvasRef.current) {
        const pctx = previewCanvasRef.current.getContext("2d");
        pctx.clearRect(
          0,
          0,
          previewCanvasRef.current.width,
          previewCanvasRef.current.height,
        );
      }
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    const isRight = currentButtonRef.current === 2;
    const activeColor = isRight ? secondaryColor : primaryColor;
    const activeBgColor = isRight ? primaryColor : secondaryColor;

    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = activeColor;
    ctx.fillStyle = activeBgColor;

    ctx.beginPath();
    pts.forEach((p, idx) => {
      if (idx === 0) ctx.moveTo(p.x + 0.5, p.y + 0.5);
      else ctx.lineTo(p.x + 0.5, p.y + 0.5);
    });
    ctx.closePath();

    if (shapeStyle === "filled") ctx.fill();
    else if (shapeStyle === "filled-outline") {
      ctx.fill();
      ctx.stroke();
    } else {
      ctx.stroke();
    }

    polygonPointsRef.current = [];
    if (previewCanvasRef.current) {
      const pctx = previewCanvasRef.current.getContext("2d");
      pctx.clearRect(
        0,
        0,
        previewCanvasRef.current.width,
        previewCanvasRef.current.height,
      );
    }
    saveSnapshot();
  }, [lineWidth, primaryColor, secondaryColor, shapeStyle, saveSnapshot]);

  const cutSelection = useCallback(() => {
    if (!selectionRef.current) return;
    const sel = selectionRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    internalClipboardRef.current = ctx.getImageData(sel.x, sel.y, sel.w, sel.h);
    setHasClipboard(true);

    ctx.fillStyle = secondaryColor;
    ctx.fillRect(sel.x, sel.y, sel.w, sel.h);

    selectionRef.current = null;
    setSelectionState(null);
    setSelectionDim(null);
    saveSnapshot();
  }, [secondaryColor, saveSnapshot]);

  const copySelection = useCallback(() => {
    if (!selectionRef.current) return;
    const sel = selectionRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    internalClipboardRef.current = ctx.getImageData(sel.x, sel.y, sel.w, sel.h);
    setHasClipboard(true);
  }, []);

  const pasteClipboard = useCallback(() => {
    if (!internalClipboardRef.current) return;
    commitSelection();
    const clipData = internalClipboardRef.current;
    const newSel = {
      x: 10,
      y: 10,
      w: clipData.width,
      h: clipData.height,
      imgData: clipData,
      isFloating: true,
    };
    selectionRef.current = newSel;
    setSelectionState(newSel);
    setSelectionDim({ w: clipData.width, h: clipData.height });
    setSelectedTool("rectSelect");
  }, [commitSelection]);

  const deleteSelection = useCallback(() => {
    if (!selectionRef.current) return;
    const sel = selectionRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    ctx.fillStyle = secondaryColor;
    ctx.fillRect(sel.x, sel.y, sel.w, sel.h);
    selectionRef.current = null;
    setSelectionState(null);
    setSelectionDim(null);
    saveSnapshot();
  }, [secondaryColor, saveSnapshot]);

  const selectAll = useCallback(() => {
    commitSelection();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = secondaryColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const sel = {
      x: 0,
      y: 0,
      w: canvas.width,
      h: canvas.height,
      imgData,
      isFloating: true,
    };
    selectionRef.current = sel;
    setSelectionState(sel);
    setSelectionDim({ w: canvas.width, h: canvas.height });
    setSelectedTool("rectSelect");
  }, [commitSelection, secondaryColor]);

  const flipCanvas = useCallback(
    (axis) => {
      commitSelection();
      commitTextToCanvas();
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      const tempCanvas = document.createElement("canvas");
      tempCanvas.width = canvas.width;
      tempCanvas.height = canvas.height;
      tempCanvas.getContext("2d").drawImage(canvas, 0, 0);

      ctx.save();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (axis === "h") {
        ctx.translate(canvas.width, 0);
        ctx.scale(-1, 1);
      } else {
        ctx.translate(0, canvas.height);
        ctx.scale(1, -1);
      }
      ctx.drawImage(tempCanvas, 0, 0);
      ctx.restore();
      saveSnapshot();
    },
    [commitSelection, commitTextToCanvas, saveSnapshot],
  );

  const rotateCanvas = useCallback(
    (direction) => {
      commitSelection();
      commitTextToCanvas();
      const canvas = canvasRef.current;
      if (!canvas) return;
      const oldW = canvas.width;
      const oldH = canvas.height;
      const tempCanvas = document.createElement("canvas");
      tempCanvas.width = oldW;
      tempCanvas.height = oldH;
      tempCanvas.getContext("2d").drawImage(canvas, 0, 0);

      const newW = oldH;
      const newH = oldW;
      canvas.width = newW;
      canvas.height = newH;
      setCanvasSize({ width: newW, height: newH });

      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      ctx.fillStyle = secondaryColor;
      ctx.fillRect(0, 0, newW, newH);

      ctx.save();
      if (direction === "cw") {
        ctx.translate(newW, 0);
        ctx.rotate(Math.PI / 2);
      } else {
        ctx.translate(0, newH);
        ctx.rotate(-Math.PI / 2);
      }
      ctx.drawImage(tempCanvas, 0, 0);
      ctx.restore();
      saveSnapshot();
    },
    [commitSelection, commitTextToCanvas, secondaryColor, saveSnapshot],
  );

  const invertColors = useCallback(() => {
    commitSelection();
    commitTextToCanvas();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const d = imgData.data;
    for (let i = 0; i < d.length; i += 4) {
      d[i] = 255 - d[i];
      d[i + 1] = 255 - d[i + 1];
      d[i + 2] = 255 - d[i + 2];
    }
    ctx.putImageData(imgData, 0, 0);
    saveSnapshot();
  }, [commitSelection, commitTextToCanvas, saveSnapshot]);

  const clearCanvas = useCallback(() => {
    commitSelection();
    commitTextToCanvas();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    ctx.fillStyle = secondaryColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    saveSnapshot();
  }, [commitSelection, commitTextToCanvas, secondaryColor, saveSnapshot]);

  const saveImagePNG = useCallback(() => {
    commitSelection();
    commitTextToCanvas();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const url = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = url;
    a.download = "untitled.png";
    a.click();
  }, [commitSelection, commitTextToCanvas]);

  const handleOpenLocalFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const img = new Image();
      img.onload = () => {
        commitSelection();
        commitTextToCanvas();
        const canvas = canvasRef.current;
        if (!canvas) return;
        canvas.width = img.width;
        canvas.height = img.height;
        setCanvasSize({ width: img.width, height: img.height });
        const ctx = canvas.getContext("2d", { willReadFrequently: true });
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, img.width, img.height);
        ctx.drawImage(img, 0, 0);
        saveSnapshot();
      };
      img.src = ev.target?.result;
    };
    reader.readAsDataURL(file);
    e.target.value = "";
  };

  const handlePointerDown = (e) => {
    if (e.button === 1) return;
    e.target.setPointerCapture?.(e.pointerId);

    if (activeTextBox && selectedTool !== "text") {
      commitTextToCanvas();
    }

    const pos = getCanvasCoords(e);
    const isRight = e.button === 2;
    currentButtonRef.current = isRight ? 2 : 0;
    const activeColor = isRight ? secondaryColor : primaryColor;

    startPosRef.current = pos;
    lastPosRef.current = pos;

    if (selectedTool === "rectSelect" || selectedTool === "freeSelect") {
      if (selectionRef.current && selectionRef.current.isFloating) {
        const sel = selectionRef.current;
        const inside =
          pos.x >= sel.x &&
          pos.x <= sel.x + sel.w &&
          pos.y >= sel.y &&
          pos.y <= sel.y + sel.h;
        if (inside) {
          isDraggingSelectionRef.current = true;
          selectionDragOffsetRef.current = {
            x: pos.x - sel.x,
            y: pos.y - sel.y,
          };
          return;
        } else {
          commitSelection();
        }
      }
    } else {
      commitSelection();
    }

    isDrawingRef.current = true;

    if (selectedTool === "polygon") {
      const now = Date.now();
      const isDoubleTap = now - lastClickTimeRef.current < 350;
      lastClickTimeRef.current = now;

      const firstPt = polygonPointsRef.current[0];
      const isNearStart =
        firstPt && Math.hypot(pos.x - firstPt.x, pos.y - firstPt.y) < 6;

      if (
        (isDoubleTap || isNearStart) &&
        polygonPointsRef.current.length >= 2
      ) {
        commitPolygon();
        isDrawingRef.current = false;
        return;
      }

      polygonPointsRef.current.push(pos);
      return;
    }

    if (selectedTool === "curve") {
      if (curveStepRef.current === 0) {
        curvePointsRef.current.p0 = pos;
        curvePointsRef.current.p3 = pos;
      }
      return;
    }

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });

    if (selectedTool === "magnifier") {
      setZoom((prev) => (prev === 1 ? 2 : prev === 2 ? 4 : 1));
      isDrawingRef.current = false;
      return;
    }

    if (selectedTool === "picker") {
      const imgData = ctx.getImageData(pos.x, pos.y, 1, 1).data;
      const hex = rgbToHex(imgData[0], imgData[1], imgData[2]);
      if (isRight) setSecondaryColor(hex);
      else setPrimaryColor(hex);
      isDrawingRef.current = false;
      return;
    }

    if (selectedTool === "fill") {
      floodFill(pos.x, pos.y, activeColor);
      isDrawingRef.current = false;
      return;
    }

    if (selectedTool === "pencil") {
      ctx.fillStyle = activeColor;
      ctx.fillRect(pos.x, pos.y, 1, 1);
    } else if (selectedTool === "brush") {
      drawBrushStroke(ctx, pos.x, pos.y, pos.x, pos.y, brushShape, activeColor);
    } else if (selectedTool === "eraser") {
      ctx.fillStyle = secondaryColor;
      ctx.fillRect(
        pos.x - Math.floor(eraserSize / 2),
        pos.y - Math.floor(eraserSize / 2),
        eraserSize,
        eraserSize,
      );
    } else if (selectedTool === "airbrush") {
      drawAirbrush(ctx, pos.x, pos.y, activeColor, airbrushSize);
    }
  };

  const handlePointerMove = (e) => {
    const pos = getCanvasCoords(e);
    setCursorPos(pos);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    const previewCanvas = previewCanvasRef.current;
    const prevCtx = previewCanvas ? previewCanvas.getContext("2d") : null;

    const isRight = currentButtonRef.current === 2;
    const activeColor = isRight ? secondaryColor : primaryColor;
    const activeBgColor = isRight ? primaryColor : secondaryColor;

    if (selectedTool === "polygon" && polygonPointsRef.current.length > 0) {
      if (!prevCtx) return;
      prevCtx.clearRect(0, 0, previewCanvas.width, previewCanvas.height);
      prevCtx.lineWidth = lineWidth;
      prevCtx.strokeStyle = activeColor;
      prevCtx.beginPath();
      polygonPointsRef.current.forEach((p, idx) => {
        if (idx === 0) prevCtx.moveTo(p.x + 0.5, p.y + 0.5);
        else prevCtx.lineTo(p.x + 0.5, p.y + 0.5);
      });
      prevCtx.lineTo(pos.x + 0.5, pos.y + 0.5);
      prevCtx.stroke();
      return;
    }

    if (!isDrawingRef.current) return;

    if (selectedTool === "pencil") {
      drawPencilLine(
        ctx,
        lastPosRef.current.x,
        lastPosRef.current.y,
        pos.x,
        pos.y,
        activeColor,
      );
      lastPosRef.current = pos;
    } else if (selectedTool === "brush") {
      drawBrushStroke(
        ctx,
        lastPosRef.current.x,
        lastPosRef.current.y,
        pos.x,
        pos.y,
        brushShape,
        activeColor,
      );
      lastPosRef.current = pos;
    } else if (selectedTool === "eraser") {
      ctx.fillStyle = secondaryColor;
      ctx.fillRect(
        pos.x - Math.floor(eraserSize / 2),
        pos.y - Math.floor(eraserSize / 2),
        eraserSize,
        eraserSize,
      );
      lastPosRef.current = pos;
    } else if (selectedTool === "airbrush") {
      drawAirbrush(ctx, pos.x, pos.y, activeColor, airbrushSize);
      lastPosRef.current = pos;
    } else if (selectedTool === "rectSelect" || selectedTool === "text") {
      if (!prevCtx) return;
      prevCtx.clearRect(0, 0, previewCanvas.width, previewCanvas.height);
      const x = Math.min(startPosRef.current.x, pos.x);
      const y = Math.min(startPosRef.current.y, pos.y);
      const w = Math.abs(pos.x - startPosRef.current.x);
      const h = Math.abs(pos.y - startPosRef.current.y);
      prevCtx.setLineDash([3, 3]);
      prevCtx.strokeStyle = "#000000";
      prevCtx.strokeRect(x + 0.5, y + 0.5, w, h);
      if (selectedTool === "rectSelect") setSelectionDim({ w, h });
    } else if (
      ["line", "curve", "rectangle", "ellipse", "roundedRect"].includes(
        selectedTool,
      )
    ) {
      if (!prevCtx) return;
      prevCtx.clearRect(0, 0, previewCanvas.width, previewCanvas.height);
      prevCtx.lineWidth = lineWidth;
      prevCtx.strokeStyle = activeColor;
      prevCtx.fillStyle = activeBgColor;

      if (selectedTool === "line") {
        prevCtx.beginPath();
        prevCtx.moveTo(
          startPosRef.current.x + 0.5,
          startPosRef.current.y + 0.5,
        );
        prevCtx.lineTo(pos.x + 0.5, pos.y + 0.5);
        prevCtx.stroke();
      } else if (selectedTool === "curve") {
        if (curveStepRef.current === 0) {
          prevCtx.beginPath();
          prevCtx.moveTo(
            curvePointsRef.current.p0.x + 0.5,
            curvePointsRef.current.p0.y + 0.5,
          );
          prevCtx.lineTo(pos.x + 0.5, pos.y + 0.5);
          prevCtx.stroke();
        } else if (curveStepRef.current === 1) {
          prevCtx.beginPath();
          prevCtx.moveTo(
            curvePointsRef.current.p0.x + 0.5,
            curvePointsRef.current.p0.y + 0.5,
          );
          prevCtx.quadraticCurveTo(
            pos.x,
            pos.y,
            curvePointsRef.current.p3.x + 0.5,
            curvePointsRef.current.p3.y + 0.5,
          );
          prevCtx.stroke();
        } else if (curveStepRef.current === 2) {
          prevCtx.beginPath();
          prevCtx.moveTo(
            curvePointsRef.current.p0.x + 0.5,
            curvePointsRef.current.p0.y + 0.5,
          );
          prevCtx.bezierCurveTo(
            curvePointsRef.current.p1.x,
            curvePointsRef.current.p1.y,
            pos.x,
            pos.y,
            curvePointsRef.current.p3.x + 0.5,
            curvePointsRef.current.p3.y + 0.5,
          );
          prevCtx.stroke();
        }
      } else if (selectedTool === "rectangle") {
        const x = Math.min(startPosRef.current.x, pos.x);
        const y = Math.min(startPosRef.current.y, pos.y);
        const w = Math.abs(pos.x - startPosRef.current.x);
        const h = Math.abs(pos.y - startPosRef.current.y);
        if (shapeStyle === "filled") prevCtx.fillRect(x, y, w, h);
        else if (shapeStyle === "filled-outline") {
          prevCtx.fillRect(x, y, w, h);
          prevCtx.strokeRect(x + 0.5, y + 0.5, w, h);
        } else prevCtx.strokeRect(x + 0.5, y + 0.5, w, h);
      } else if (selectedTool === "ellipse") {
        const rx = Math.abs(pos.x - startPosRef.current.x) / 2;
        const ry = Math.abs(pos.y - startPosRef.current.y) / 2;
        const cx = Math.min(startPosRef.current.x, pos.x) + rx;
        const cy = Math.min(startPosRef.current.y, pos.y) + ry;
        prevCtx.beginPath();
        prevCtx.ellipse(
          cx,
          cy,
          Math.max(0.1, rx),
          Math.max(0.1, ry),
          0,
          0,
          Math.PI * 2,
        );
        if (shapeStyle === "filled") prevCtx.fill();
        else if (shapeStyle === "filled-outline") {
          prevCtx.fill();
          prevCtx.stroke();
        } else prevCtx.stroke();
      } else if (selectedTool === "roundedRect") {
        const x = Math.min(startPosRef.current.x, pos.x);
        const y = Math.min(startPosRef.current.y, pos.y);
        const w = Math.abs(pos.x - startPosRef.current.x);
        const h = Math.abs(pos.y - startPosRef.current.y);
        const r = Math.min(8, w / 4, h / 4);
        prevCtx.beginPath();
        prevCtx.roundRect(x + 0.5, y + 0.5, w, h, r);
        if (shapeStyle === "filled") prevCtx.fill();
        else if (shapeStyle === "filled-outline") {
          prevCtx.fill();
          prevCtx.stroke();
        } else prevCtx.stroke();
      }
    }
  };

  const handlePointerUp = (e) => {
    e.target.releasePointerCapture?.(e.pointerId);
    if (!isDrawingRef.current) return;
    isDrawingRef.current = false;

    if (selectedTool === "polygon") return;

    const pos = getCanvasCoords(e);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    const previewCanvas = previewCanvasRef.current;
    const prevCtx = previewCanvas ? previewCanvas.getContext("2d") : null;

    const isRight = currentButtonRef.current === 2;
    const activeColor = isRight ? secondaryColor : primaryColor;
    const activeBgColor = isRight ? primaryColor : secondaryColor;

    if (previewCanvas && prevCtx)
      prevCtx.clearRect(0, 0, previewCanvas.width, previewCanvas.height);

    if (selectedTool === "rectSelect") {
      const x = Math.min(startPosRef.current.x, pos.x);
      const y = Math.min(startPosRef.current.y, pos.y);
      const w = Math.abs(pos.x - startPosRef.current.x);
      const h = Math.abs(pos.y - startPosRef.current.y);

      if (w > 2 && h > 2) {
        const imgData = ctx.getImageData(x, y, w, h);
        ctx.fillStyle = secondaryColor;
        ctx.fillRect(x, y, w, h);

        const sel = { x, y, w, h, imgData, isFloating: true };
        selectionRef.current = sel;
        setSelectionState({ ...sel });
        setSelectionDim({ w, h });
      }
      return;
    }

    if (selectedTool === "text") {
      const x = Math.min(startPosRef.current.x, pos.x);
      const y = Math.min(startPosRef.current.y, pos.y);
      const width = Math.max(120, Math.abs(pos.x - startPosRef.current.x));
      const height = Math.max(48, Math.abs(pos.y - startPosRef.current.y));
      setActiveTextBox({ x, y, width, height, text: "" });
      setTimeout(() => textInputRef.current?.focus(), 50);
      return;
    }

    if (selectedTool === "line") {
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = activeColor;
      ctx.beginPath();
      ctx.moveTo(startPosRef.current.x + 0.5, startPosRef.current.y + 0.5);
      ctx.lineTo(pos.x + 0.5, pos.y + 0.5);
      ctx.stroke();
      saveSnapshot();
    } else if (selectedTool === "curve") {
      if (curveStepRef.current === 0) {
        curvePointsRef.current.p3 = pos;
        curveStepRef.current = 1;
      } else if (curveStepRef.current === 1) {
        curvePointsRef.current.p1 = pos;
        curveStepRef.current = 2;
      } else if (curveStepRef.current === 2) {
        curvePointsRef.current.p2 = pos;
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = activeColor;
        ctx.beginPath();
        ctx.moveTo(
          curvePointsRef.current.p0.x + 0.5,
          curvePointsRef.current.p0.y + 0.5,
        );
        ctx.bezierCurveTo(
          curvePointsRef.current.p1.x,
          curvePointsRef.current.p1.y,
          curvePointsRef.current.p2.x,
          curvePointsRef.current.p2.y,
          curvePointsRef.current.p3.x + 0.5,
          curvePointsRef.current.p3.y + 0.5,
        );
        ctx.stroke();
        curveStepRef.current = 0;
        curvePointsRef.current = { p0: null, p1: null, p2: null, p3: null };
        saveSnapshot();
      }
    } else if (selectedTool === "rectangle") {
      const x = Math.min(startPosRef.current.x, pos.x);
      const y = Math.min(startPosRef.current.y, pos.y);
      const w = Math.abs(pos.x - startPosRef.current.x);
      const h = Math.abs(pos.y - startPosRef.current.y);
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = activeColor;
      ctx.fillStyle = activeBgColor;
      if (shapeStyle === "filled") ctx.fillRect(x, y, w, h);
      else if (shapeStyle === "filled-outline") {
        ctx.fillRect(x, y, w, h);
        ctx.strokeRect(x + 0.5, y + 0.5, w, h);
      } else ctx.strokeRect(x + 0.5, y + 0.5, w, h);
      saveSnapshot();
    } else if (selectedTool === "ellipse") {
      const rx = Math.abs(pos.x - startPosRef.current.x) / 2;
      const ry = Math.abs(pos.y - startPosRef.current.y) / 2;
      const cx = Math.min(startPosRef.current.x, pos.x) + rx;
      const cy = Math.min(startPosRef.current.y, pos.y) + ry;
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = activeColor;
      ctx.fillStyle = activeBgColor;
      ctx.beginPath();
      ctx.ellipse(
        cx,
        cy,
        Math.max(0.1, rx),
        Math.max(0.1, ry),
        0,
        0,
        Math.PI * 2,
      );
      if (shapeStyle === "filled") ctx.fill();
      else if (shapeStyle === "filled-outline") {
        ctx.fill();
        ctx.stroke();
      } else ctx.stroke();
      saveSnapshot();
    } else if (selectedTool === "roundedRect") {
      const x = Math.min(startPosRef.current.x, pos.x);
      const y = Math.min(startPosRef.current.y, pos.y);
      const w = Math.abs(pos.x - startPosRef.current.x);
      const h = Math.abs(pos.y - startPosRef.current.y);
      const r = Math.min(8, w / 4, h / 4);
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = activeColor;
      ctx.fillStyle = activeBgColor;
      ctx.beginPath();
      ctx.roundRect(x + 0.5, y + 0.5, w, h, r);
      if (shapeStyle === "filled") ctx.fill();
      else if (shapeStyle === "filled-outline") {
        ctx.fill();
        ctx.stroke();
      } else ctx.stroke();
      saveSnapshot();
    } else if (
      ["pencil", "brush", "eraser", "airbrush"].includes(selectedTool)
    ) {
      saveSnapshot();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      const isCmd = e.ctrlKey || e.metaKey;
      const targetTag = (e.target && e.target.tagName) || "";
      if (targetTag === "INPUT" || targetTag === "TEXTAREA") {
        if (e.key === "Escape") setActiveTextBox(null);
        return;
      }

      if (isCmd && e.key.toLowerCase() === "z" && !e.shiftKey) {
        e.preventDefault();
        handleUndo();
      } else if (
        isCmd &&
        (e.key.toLowerCase() === "y" ||
          (e.key.toLowerCase() === "z" && e.shiftKey))
      ) {
        e.preventDefault();
        handleRedo();
      } else if (isCmd && e.key.toLowerCase() === "s") {
        e.preventDefault();
        saveImagePNG();
      } else if (isCmd && e.key.toLowerCase() === "n") {
        e.preventDefault();
        setActiveDialog("newConfirm");
      } else if (isCmd && e.key.toLowerCase() === "c") {
        e.preventDefault();
        copySelection();
      } else if (isCmd && e.key.toLowerCase() === "x") {
        e.preventDefault();
        cutSelection();
      } else if (isCmd && e.key.toLowerCase() === "v") {
        e.preventDefault();
        pasteClipboard();
      } else if (isCmd && e.key.toLowerCase() === "a") {
        e.preventDefault();
        selectAll();
      } else if (isCmd && e.key.toLowerCase() === "i") {
        e.preventDefault();
        invertColors();
      } else if (e.key === "Delete") {
        deleteSelection();
      } else if (e.key === "Escape") {
        commitSelection();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [
    handleUndo,
    handleRedo,
    saveImagePNG,
    copySelection,
    cutSelection,
    pasteClipboard,
    selectAll,
    invertColors,
    deleteSelection,
    commitSelection,
  ]);

  const startCanvasResize = (handle, e) => {
    e.stopPropagation();
    isResizingCanvasRef.current = handle;
    resizeStartDimRef.current = {
      width: canvasSize.width,
      height: canvasSize.height,
      startX: e.clientX,
      startY: e.clientY,
    };

    const handlePointerMoveResizing = (ev) => {
      if (!isResizingCanvasRef.current) return;
      const dx = Math.round(
        (ev.clientX - resizeStartDimRef.current.startX) / zoom,
      );
      const dy = Math.round(
        (ev.clientY - resizeStartDimRef.current.startY) / zoom,
      );

      let newW = resizeStartDimRef.current.width;
      let newH = resizeStartDimRef.current.height;

      if (
        isResizingCanvasRef.current === "e" ||
        isResizingCanvasRef.current === "se"
      ) {
        newW = Math.max(100, resizeStartDimRef.current.width + dx);
      }
      if (
        isResizingCanvasRef.current === "s" ||
        isResizingCanvasRef.current === "se"
      ) {
        newH = Math.max(100, resizeStartDimRef.current.height + dy);
      }

      const canvas = canvasRef.current;
      if (!canvas) return;
      const oldData = canvas
        .getContext("2d", { willReadFrequently: true })
        .getImageData(0, 0, canvas.width, canvas.height);
      canvas.width = newW;
      canvas.height = newH;
      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      ctx.fillStyle = secondaryColor;
      ctx.fillRect(0, 0, newW, newH);
      ctx.putImageData(oldData, 0, 0);
      setCanvasSize({ width: newW, height: newH });
    };

    const handlePointerUpResizing = () => {
      if (isResizingCanvasRef.current) {
        isResizingCanvasRef.current = null;
        saveSnapshot();
      }
      window.removeEventListener("pointermove", handlePointerMoveResizing);
      window.removeEventListener("pointerup", handlePointerUpResizing);
    };

    window.addEventListener("pointermove", handlePointerMoveResizing);
    window.addEventListener("pointerup", handlePointerUpResizing);
  };

  const handleToolSelect = (toolId, name) => {
    commitSelection();
    if (polygonPointsRef.current.length > 0) commitPolygon();
    if (activeTextBox) commitTextToCanvas();
    setSelectedTool(toolId);
    setStatusMessage(name);
  };

  return (
    <div className="w-full min-h-screen bg-[#d0d0d0] flex items-center justify-center p-2 sm:p-6 overflow-auto select-none">
      {/* 50% / Centered Retro Paint Window Frame */}
      <div
        className="jspaint flex flex-col w-[680px] h-[520px] max-w-full max-h-[92vh] bg-[#c0c0c0] text-black select-none font-sans overflow-hidden text-[11px] border-2 border-t-[#ffffff] border-l-[#ffffff] border-r-[#404040] border-b-[#404040] shadow-[3px_3px_12px_rgba(0,0,0,0.35)]"
        style={{ fontFamily: 'Tahoma, "MS Sans Serif", Arial, sans-serif' }}
        onContextMenu={(e) => e.preventDefault()}
      >
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept="image/*"
          onChange={handleOpenLocalFile}
        />

        {/* 1. TITLE BAR */}
        <div className="flex items-center justify-between bg-gradient-to-r from-[#000080] to-[#1084d0] text-white font-bold px-2 py-[2px] text-[12px] shrink-0">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 bg-white/20 border border-white/50 inline-block"></span>
            <span>untitled - Pixels Paint</span>
          </div>
          <div className="flex items-center gap-[2px]">
            <button className="w-4 h-4 bg-[#c0c0c0] text-black text-[10px] flex items-center justify-center border border-white shadow-[inset_-1px_-1px_0_#404040,inset_1px_1px_0_#dfdfdf]">
              _
            </button>
            <button className="w-4 h-4 bg-[#c0c0c0] text-black text-[10px] flex items-center justify-center border border-white shadow-[inset_-1px_-1px_0_#404040,inset_1px_1px_0_#dfdfdf]">
              □
            </button>
            <button className="w-4 h-4 bg-[#c0c0c0] text-black text-[10px] flex items-center justify-center border border-white shadow-[inset_-1px_-1px_0_#404040,inset_1px_1px_0_#dfdfdf]">
              ×
            </button>
          </div>
        </div>

        {/* 2. MENUS */}
        <div
          ref={menuBarRef}
          className="menus flex items-center bg-[#c0c0c0] px-1 py-[2px] border-b border-[#808080] z-50 text-[12px] overflow-x-auto shrink-0 scrollbar-none"
        >
          {["file", "edit", "view", "image", "colors", "help"].map(
            (menuKey) => (
              <div key={menuKey} className="menu-container relative">
                <div
                  className={`menu-button px-2 py-[2px] capitalize cursor-pointer ${
                    openMenu === menuKey
                      ? "bg-[#000080] text-white"
                      : "hover:bg-[#dfdfdf]"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenMenu(openMenu === menuKey ? null : menuKey);
                  }}
                >
                  <span className="underline">{menuKey[0]}</span>
                  {menuKey.slice(1)}
                </div>
                {openMenu === menuKey && (
                  <div className="menu-popup absolute left-0 top-full bg-[#c0c0c0] border-2 border-t-[#ffffff] border-l-[#ffffff] border-r-[#808080] border-b-[#808080] shadow-[1px_1px_0px_#000] py-[2px] min-w-[170px] z-50">
                    <table className="menu-popup-table w-full">
                      <tbody>
                        {menuKey === "file" && (
                          <>
                            <tr
                              className="hover:bg-[#000080] hover:text-white cursor-pointer"
                              onClick={() => {
                                setActiveDialog("newConfirm");
                                setOpenMenu(null);
                              }}
                            >
                              <td className="px-3 py-1">
                                <span className="underline">N</span>ew
                              </td>
                              <td className="text-[10px] text-right pr-2 text-gray-500">
                                Ctrl+N
                              </td>
                            </tr>
                            <tr
                              className="hover:bg-[#000080] hover:text-white cursor-pointer"
                              onClick={() => {
                                fileInputRef.current?.click();
                                setOpenMenu(null);
                              }}
                            >
                              <td className="px-3 py-1">
                                <span className="underline">O</span>pen...
                              </td>
                              <td className="text-[10px] text-right pr-2 text-gray-500">
                                Ctrl+O
                              </td>
                            </tr>
                            <tr
                              className="hover:bg-[#000080] hover:text-white cursor-pointer"
                              onClick={() => {
                                saveImagePNG();
                                setOpenMenu(null);
                              }}
                            >
                              <td className="px-3 py-1">
                                <span className="underline">S</span>ave As PNG
                              </td>
                              <td className="text-[10px] text-right pr-2 text-gray-500">
                                Ctrl+S
                              </td>
                            </tr>
                          </>
                        )}
                        {menuKey === "edit" && (
                          <>
                            <tr
                              className={`hover:bg-[#000080] hover:text-white cursor-pointer ${historyIndex <= 0 ? "opacity-50 pointer-events-none" : ""}`}
                              onClick={() => {
                                handleUndo();
                                setOpenMenu(null);
                              }}
                            >
                              <td className="px-3 py-1">
                                <span className="underline">U</span>ndo
                              </td>
                              <td className="text-[10px] text-right pr-2">
                                Ctrl+Z
                              </td>
                            </tr>
                            <tr
                              className={`hover:bg-[#000080] hover:text-white cursor-pointer ${historyIndex >= historyLength - 1 ? "opacity-50 pointer-events-none" : ""}`}
                              onClick={() => {
                                handleRedo();
                                setOpenMenu(null);
                              }}
                            >
                              <td className="px-3 py-1">
                                <span className="underline">R</span>edo
                              </td>
                              <td className="text-[10px] text-right pr-2">
                                Ctrl+Y
                              </td>
                            </tr>
                            <tr className="border-t border-[#808080]">
                              <td colSpan={2} className="p-0" />
                            </tr>
                            <tr
                              className={`hover:bg-[#000080] hover:text-white cursor-pointer ${!selectionState ? "opacity-50 pointer-events-none" : ""}`}
                              onClick={() => {
                                cutSelection();
                                setOpenMenu(null);
                              }}
                            >
                              <td className="px-3 py-1">
                                Cu<span className="underline">t</span>
                              </td>
                              <td className="text-[10px] text-right pr-2">
                                Ctrl+X
                              </td>
                            </tr>
                            <tr
                              className={`hover:bg-[#000080] hover:text-white cursor-pointer ${!selectionState ? "opacity-50 pointer-events-none" : ""}`}
                              onClick={() => {
                                copySelection();
                                setOpenMenu(null);
                              }}
                            >
                              <td className="px-3 py-1">
                                <span className="underline">C</span>opy
                              </td>
                              <td className="text-[10px] text-right pr-2">
                                Ctrl+C
                              </td>
                            </tr>
                            <tr
                              className={`hover:bg-[#000080] hover:text-white cursor-pointer ${!hasClipboard ? "opacity-50 pointer-events-none" : ""}`}
                              onClick={() => {
                                pasteClipboard();
                                setOpenMenu(null);
                              }}
                            >
                              <td className="px-3 py-1">
                                <span className="underline">P</span>aste
                              </td>
                              <td className="text-[10px] text-right pr-2">
                                Ctrl+V
                              </td>
                            </tr>
                            <tr className="border-t border-[#808080]">
                              <td colSpan={2} className="p-0" />
                            </tr>
                            <tr
                              className="hover:bg-[#000080] hover:text-white cursor-pointer"
                              onClick={() => {
                                selectAll();
                                setOpenMenu(null);
                              }}
                            >
                              <td className="px-3 py-1">
                                Select <span className="underline">A</span>ll
                              </td>
                              <td className="text-[10px] text-right pr-2">
                                Ctrl+A
                              </td>
                            </tr>
                          </>
                        )}
                        {menuKey === "view" && (
                          <>
                            <tr
                              className="hover:bg-[#000080] hover:text-white cursor-pointer"
                              onClick={() => {
                                setShowToolBox(!showToolBox);
                                setOpenMenu(null);
                              }}
                            >
                              <td className="px-3 py-1">
                                {showToolBox ? "✓" : ""}{" "}
                                <span className="underline">T</span>ool Box
                              </td>
                              <td className="text-[10px] text-right pr-2">
                                Ctrl+T
                              </td>
                            </tr>
                            <tr
                              className="hover:bg-[#000080] hover:text-white cursor-pointer"
                              onClick={() => {
                                setShowColorBox(!showColorBox);
                                setOpenMenu(null);
                              }}
                            >
                              <td className="px-3 py-1">
                                {showColorBox ? "✓" : ""}{" "}
                                <span className="underline">C</span>olor Box
                              </td>
                              <td className="text-[10px] text-right pr-2">
                                Ctrl+L
                              </td>
                            </tr>
                            <tr
                              className="hover:bg-[#000080] hover:text-white cursor-pointer"
                              onClick={() => {
                                setShowStatusBar(!showStatusBar);
                                setOpenMenu(null);
                              }}
                            >
                              <td className="px-3 py-1">
                                {showStatusBar ? "✓" : ""}{" "}
                                <span className="underline">S</span>tatus Bar
                              </td>
                              <td className="text-[10px] text-right pr-2" />
                            </tr>
                            <tr className="border-t border-[#808080]">
                              <td colSpan={2} className="p-0" />
                            </tr>
                            <tr
                              className="hover:bg-[#000080] hover:text-white cursor-pointer"
                              onClick={() => {
                                setZoom(1);
                                setOpenMenu(null);
                              }}
                            >
                              <td className="px-3 py-1">100% Zoom</td>
                              <td className="text-[10px] text-right pr-2" />
                            </tr>
                            <tr
                              className="hover:bg-[#000080] hover:text-white cursor-pointer"
                              onClick={() => {
                                setZoom(2);
                                setOpenMenu(null);
                              }}
                            >
                              <td className="px-3 py-1">200% Zoom</td>
                              <td className="text-[10px] text-right pr-2" />
                            </tr>
                          </>
                        )}
                        {menuKey === "image" && (
                          <>
                            <tr
                              className="hover:bg-[#000080] hover:text-white cursor-pointer"
                              onClick={() => {
                                flipCanvas("h");
                                setOpenMenu(null);
                              }}
                            >
                              <td className="px-3 py-1">
                                Flip <span className="underline">H</span>
                                orizontal
                              </td>
                              <td className="text-[10px] text-right pr-2" />
                            </tr>
                            <tr
                              className="hover:bg-[#000080] hover:text-white cursor-pointer"
                              onClick={() => {
                                flipCanvas("v");
                                setOpenMenu(null);
                              }}
                            >
                              <td className="px-3 py-1">
                                Flip <span className="underline">V</span>ertical
                              </td>
                              <td className="text-[10px] text-right pr-2" />
                            </tr>
                            <tr
                              className="hover:bg-[#000080] hover:text-white cursor-pointer"
                              onClick={() => {
                                rotateCanvas("cw");
                                setOpenMenu(null);
                              }}
                            >
                              <td className="px-3 py-1">
                                Rotate 90° <span className="underline">C</span>W
                              </td>
                              <td className="text-[10px] text-right pr-2" />
                            </tr>
                            <tr
                              className="hover:bg-[#000080] hover:text-white cursor-pointer"
                              onClick={() => {
                                invertColors();
                                setOpenMenu(null);
                              }}
                            >
                              <td className="px-3 py-1">
                                <span className="underline">I</span>nvert Colors
                              </td>
                              <td className="text-[10px] text-right pr-2">
                                Ctrl+I
                              </td>
                            </tr>
                            <tr
                              className="hover:bg-[#000080] hover:text-white cursor-pointer"
                              onClick={() => {
                                clearCanvas();
                                setOpenMenu(null);
                              }}
                            >
                              <td className="px-3 py-1">Clear Image</td>
                              <td className="text-[10px] text-right pr-2" />
                            </tr>
                          </>
                        )}
                        {menuKey === "colors" && (
                          <tr
                            className="hover:bg-[#000080] hover:text-white cursor-pointer"
                            onClick={() => {
                              const p = primaryColor;
                              setPrimaryColor(secondaryColor);
                              setSecondaryColor(p);
                              setOpenMenu(null);
                            }}
                          >
                            <td className="px-3 py-1">
                              Swap Primary / Secondary
                            </td>
                            <td className="text-[10px] text-right pr-2" />
                          </tr>
                        )}
                        {menuKey === "help" && (
                          <tr
                            className="hover:bg-[#000080] hover:text-white cursor-pointer"
                            onClick={() => {
                              setActiveDialog("about");
                              setOpenMenu(null);
                            }}
                          >
                            <td className="px-3 py-1">About Paint</td>
                            <td className="text-[10px] text-right pr-2" />
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ),
          )}
        </div>

        {/* 3. OPTIONAL FLOATING TEXT TOOLBAR */}
        {showFontBox && (selectedTool === "text" || activeTextBox) && (
          <div className="flex items-center gap-1 bg-[#c0c0c0] border-b border-[#808080] px-2 py-1 text-[11px] overflow-x-auto shrink-0 z-40">
            <span className="font-bold text-gray-700">Font:</span>
            <select
              value={textFont}
              onChange={(e) => setTextFont(e.target.value)}
              className="border border-[#808080] bg-white text-black px-1 py-[1px] text-[11px]"
            >
              <option value="Arial">Arial</option>
              <option value="Times New Roman">Times New Roman</option>
              <option value="Courier New">Courier New</option>
            </select>
            <select
              value={textSize}
              onChange={(e) => setTextSize(Number(e.target.value))}
              className="border border-[#808080] bg-white text-black px-1 py-[1px] text-[11px]"
            >
              {[8, 9, 10, 11, 12, 14, 16, 18, 20, 24, 28, 36].map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            <button
              onClick={() => setTextBold(!textBold)}
              className={`w-5 h-5 font-bold border ${textBold ? "border-[#808080] bg-[#dfdfdf]" : "border-white"}`}
            >
              B
            </button>
            <button
              onClick={() => setTextItalic(!textItalic)}
              className={`w-5 h-5 italic border ${textItalic ? "border-[#808080] bg-[#dfdfdf]" : "border-white"}`}
            >
              I
            </button>
            <button
              onClick={() => setTextUnderline(!textUnderline)}
              className={`w-5 h-5 underline border ${textUnderline ? "border-[#808080] bg-[#dfdfdf]" : "border-white"}`}
            >
              U
            </button>
          </div>
        )}

        {/* 4. CANVAS AREA (FULL WIDTH ABOVE BOTTOM BAR) */}
        <div className="canvas-area flex-1 bg-[#808080] overflow-auto p-3 relative flex items-center justify-center touch-none">
          <div
            className="relative bg-white select-none shrink-0"
            style={{
              width: canvasSize.width * zoom,
              height: canvasSize.height * zoom,
            }}
          >
            <canvas
              ref={canvasRef}
              width={canvasSize.width}
              height={canvasSize.height}
              className="absolute top-0 left-0"
              style={{
                width: canvasSize.width * zoom,
                height: canvasSize.height * zoom,
                imageRendering: zoom > 1 ? "pixelated" : "auto",
                cursor: selectedTool === "picker" ? "crosshair" : "default",
              }}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onDoubleClick={() =>
                selectedTool === "polygon" && commitPolygon()
              }
            />

            <canvas
              ref={previewCanvasRef}
              width={canvasSize.width}
              height={canvasSize.height}
              className="absolute top-0 left-0 pointer-events-none"
              style={{
                width: canvasSize.width * zoom,
                height: canvasSize.height * zoom,
                imageRendering: zoom > 1 ? "pixelated" : "auto",
              }}
            />

            {/* FLOATING DRAGGABLE SELECTION OVERLAY */}
            {selectionState && selectionState.isFloating && (
              <div
                className="absolute cursor-move select-none z-30"
                style={{
                  left: selectionState.x * zoom,
                  top: selectionState.y * zoom,
                  width: selectionState.w * zoom,
                  height: selectionState.h * zoom,
                  touchAction: "none",
                }}
                onPointerDown={(e) => {
                  e.stopPropagation();
                  e.target.setPointerCapture?.(e.pointerId);
                  isDraggingSelectionRef.current = true;
                  const pos = getCanvasCoords(e);
                  selectionDragOffsetRef.current = {
                    x: pos.x - selectionState.x,
                    y: pos.y - selectionState.y,
                  };
                }}
                onPointerMove={handlePointerMove}
                onPointerUp={() => {
                  isDraggingSelectionRef.current = false;
                }}
              >
                <img
                  src={(() => {
                    const c = document.createElement("canvas");
                    c.width = selectionState.w;
                    c.height = selectionState.h;
                    c.getContext("2d").putImageData(
                      selectionState.imgData,
                      0,
                      0,
                    );
                    return c.toDataURL();
                  })()}
                  alt="selection"
                  draggable={false}
                  className="w-full h-full pointer-events-none border border-dashed border-black block"
                  style={{ imageRendering: zoom > 1 ? "pixelated" : "auto" }}
                />

                <div className="pointer-events-none absolute -left-1 -top-1 w-1.5 h-1.5 bg-black border border-white" />
                <div className="pointer-events-none absolute left-1/2 -top-1 -translate-x-1/2 w-1.5 h-1.5 bg-black border border-white" />
                <div className="pointer-events-none absolute -right-1 -top-1 w-1.5 h-1.5 bg-black border border-white" />
                <div className="pointer-events-none absolute -right-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-black border border-white" />
                <div className="pointer-events-none absolute -right-1 -bottom-1 w-1.5 h-1.5 bg-black border border-white" />
                <div className="pointer-events-none absolute left-1/2 -bottom-1 -translate-x-1/2 w-1.5 h-1.5 bg-black border border-white" />
                <div className="pointer-events-none absolute -left-1 -bottom-1 w-1.5 h-1.5 bg-black border border-white" />
                <div className="pointer-events-none absolute -left-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-black border border-white" />
              </div>
            )}

            {/* FLOATING TEXT BOX */}
            {activeTextBox && (
              <div
                className="absolute z-20"
                style={{
                  left: activeTextBox.x * zoom,
                  top: activeTextBox.y * zoom,
                  width: activeTextBox.width * zoom,
                  height: activeTextBox.height * zoom,
                }}
              >
                <textarea
                  ref={textInputRef}
                  value={activeTextBox.text}
                  onChange={(e) =>
                    setActiveTextBox({ ...activeTextBox, text: e.target.value })
                  }
                  onBlur={commitTextToCanvas}
                  className="w-full h-full p-1 resize border border-dashed border-black outline-none bg-transparent"
                  style={{
                    fontFamily: textFont,
                    fontSize: `${textSize * zoom}px`,
                    fontWeight: textBold ? "bold" : "normal",
                    fontStyle: textItalic ? "italic" : "normal",
                    textDecoration: textUnderline ? "underline" : "none",
                    color: primaryColor,
                    backgroundColor: !isTransparentDraw
                      ? secondaryColor
                      : "transparent",
                  }}
                  autoFocus
                />
              </div>
            )}

            {/* CANVAS RESIZE HANDLES */}
            <div
              className="handle absolute -right-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#000080] border border-white cursor-ew-resize"
              onPointerDown={(e) => startCanvasResize("e", e)}
            />
            <div
              className="handle absolute left-1/2 -bottom-1 -translate-x-1/2 w-1.5 h-1.5 bg-[#000080] border border-white cursor-ns-resize"
              onPointerDown={(e) => startCanvasResize("s", e)}
            />
            <div
              className="handle absolute -right-1 -bottom-1 w-1.5 h-1.5 bg-[#000080] border border-white cursor-nwse-resize"
              onPointerDown={(e) => startCanvasResize("se", e)}
            />
          </div>
        </div>

        {/* 5. UNIFIED BOTTOM CONTROL BAR (TOOLS + OPTIONS + COLOR PALETTE) */}
        {(showToolBox || showColorBox) && (
          <div className="component-area shrink-0 bg-[#c0c0c0] border-t border-[#808080] z-20 overflow-x-auto select-none scrollbar-thin">
            <div className="flex items-center gap-2 p-1 min-w-max">
              {/* Bottom Tools Grid & Options */}
              {showToolBox && (
                <div className="flex items-center gap-1.5 pr-2 border-r border-[#808080]">
                  {/* 2-Row Horizontal Tool Matrix */}
                  <div className="grid grid-rows-2 grid-flow-col gap-[2px] bg-[#c0c0c0]">
                    {TOOLS_CONFIG.map((t) => (
                      <div
                        key={t.id}
                        title={t.name}
                        onClick={() => handleToolSelect(t.id, t.name)}
                        className={`tool w-[22px] h-[22px] flex items-center justify-center cursor-pointer ${
                          selectedTool === t.id
                            ? "border-2 border-t-[#808080] border-l-[#808080] border-r-[#ffffff] border-b-[#ffffff] bg-[#dfdfdf]"
                            : "border-2 border-t-[#ffffff] border-l-[#ffffff] border-r-[#808080] border-b-[#808080] active:border-[#808080]"
                        }`}
                      >
                        {t.icon}
                      </div>
                    ))}
                  </div>

                  {/* Tool Options Tray */}
                  <div className="tool-options w-[54px] h-[46px] border-2 border-t-[#808080] border-l-[#808080] border-r-[#ffffff] border-b-[#ffffff] bg-[#c0c0c0] flex items-center justify-center p-1 shrink-0">
                    {["rectSelect", "freeSelect", "text"].includes(
                      selectedTool,
                    ) && (
                      <div className="flex flex-col gap-1 items-center w-full">
                        <div
                          onClick={() => setIsTransparentDraw(false)}
                          className={`w-full py-[2px] flex justify-center cursor-pointer ${!isTransparentDraw ? "bg-[#000080]" : ""}`}
                          title="Opaque"
                        >
                          <div className="w-7 h-2.5 border border-black bg-white" />
                        </div>
                        <div
                          onClick={() => setIsTransparentDraw(true)}
                          className={`w-full py-[2px] flex justify-center cursor-pointer ${isTransparentDraw ? "bg-[#000080]" : ""}`}
                          title="Transparent"
                        >
                          <div className="w-7 h-2.5 border border-dashed border-black bg-transparent" />
                        </div>
                      </div>
                    )}
                    {selectedTool === "eraser" && (
                      <div className="flex flex-col gap-1 items-center">
                        {[4, 6, 8, 10].map((sz) => (
                          <div
                            key={sz}
                            onClick={() => setEraserSize(sz)}
                            className={`cursor-pointer p-0.5 ${eraserSize === sz ? "bg-[#000080]" : ""}`}
                          >
                            <div
                              style={{ width: sz, height: sz }}
                              className="bg-black border border-black"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                    {["line", "curve", "pencil"].includes(selectedTool) && (
                      <div className="flex flex-col gap-1 items-center w-full px-1">
                        {[1, 2, 3, 5].map((w) => (
                          <div
                            key={w}
                            onClick={() => setLineWidth(w)}
                            className={`w-full cursor-pointer h-1.5 flex items-center ${lineWidth === w ? "bg-[#000080]" : ""}`}
                          >
                            <div
                              style={{ height: w }}
                              className="w-full bg-black"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                    {["brush"].includes(selectedTool) && (
                      <div className="grid grid-cols-2 gap-1 items-center">
                        <div
                          onClick={() => setBrushShape("round-small")}
                          className={`w-4 h-4 flex items-center justify-center cursor-pointer ${brushShape === "round-small" ? "bg-[#000080]" : ""}`}
                          title="Small Round (3px)"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-black pointer-events-none" />
                        </div>
                        <div
                          onClick={() => setBrushShape("round-medium")}
                          className={`w-4 h-4 flex items-center justify-center cursor-pointer ${brushShape === "round-medium" ? "bg-[#000080]" : ""}`}
                          title="Medium Round (8px)"
                        >
                          <div className="w-2.5 h-2.5 rounded-full bg-black pointer-events-none" />
                        </div>
                        <div
                          onClick={() => setBrushShape("round-large")}
                          className={`w-4 h-4 flex items-center justify-center cursor-pointer ${brushShape === "round-large" ? "bg-[#000080]" : ""}`}
                          title="Large Round (16px)"
                        >
                          <div className="w-3.5 h-3.5 rounded-full bg-black pointer-events-none" />
                        </div>
                        <div
                          onClick={() => setBrushShape("square-medium")}
                          className={`w-4 h-4 flex items-center justify-center cursor-pointer ${brushShape === "square-medium" ? "bg-[#000080]" : ""}`}
                          title="Square (10px)"
                        >
                          <div className="w-2.5 h-2.5 bg-black pointer-events-none" />
                        </div>
                      </div>
                    )}
                    {[
                      "rectangle",
                      "ellipse",
                      "roundedRect",
                      "polygon",
                    ].includes(selectedTool) && (
                      <div className="flex flex-col gap-1 items-center w-full">
                        <div
                          onClick={() => setShapeStyle("outline")}
                          className={`cursor-pointer p-0.5 ${shapeStyle === "outline" ? "bg-[#000080]" : ""}`}
                          title="Outline"
                        >
                          <div className="w-6 h-1.5 border border-black bg-transparent" />
                        </div>
                        <div
                          onClick={() => setShapeStyle("filled-outline")}
                          className={`cursor-pointer p-0.5 ${shapeStyle === "filled-outline" ? "bg-[#000080]" : ""}`}
                          title="Filled Outline"
                        >
                          <div className="w-6 h-1.5 border border-black bg-gray-400" />
                        </div>
                        <div
                          onClick={() => setShapeStyle("filled")}
                          className={`cursor-pointer p-0.5 ${shapeStyle === "filled" ? "bg-[#000080]" : ""}`}
                          title="Filled Solid"
                        >
                          <div className="w-6 h-1.5 bg-black" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Bottom Color Swatches & 28-Palette Grid */}
              {showColorBox && (
                <div className="flex items-center gap-1.5">
                  <div className="relative w-[30px] h-[30px] border-2 border-t-[#808080] border-l-[#808080] border-r-[#ffffff] border-b-[#ffffff] bg-[#c0c0c0] p-[2px] shrink-0">
                    <div
                      className="absolute right-0.5 bottom-0.5 w-[13px] h-[13px] border border-black shadow-inner cursor-pointer"
                      style={{ backgroundColor: secondaryColor }}
                      title="Secondary Color (Right Click swatch to set)"
                    />
                    <div
                      className="absolute left-0.5 top-0.5 w-[13px] h-[13px] border border-black shadow-inner z-10 cursor-pointer"
                      style={{ backgroundColor: primaryColor }}
                      title="Primary Color (Left Click swatch to set)"
                    />
                  </div>

                  <div className="palette grid grid-rows-2 grid-flow-col gap-[1px] bg-[#808080] p-[1px] border border-t-[#808080] border-l-[#808080] border-r-[#ffffff] border-b-[#ffffff] shrink-0">
                    {PALETTE_COLORS.map((col, idx) => (
                      <div
                        key={idx}
                        className="relative w-[13px] h-[13px] border border-t-[#808080] border-l-[#808080] border-r-[#ffffff] border-b-[#ffffff] active:border-black cursor-pointer overflow-hidden"
                        style={{ backgroundColor: col }}
                        onClick={() => setPrimaryColor(col)}
                        onContextMenu={(e) => {
                          e.preventDefault();
                          setSecondaryColor(col);
                        }}
                      >
                        <input
                          type="color"
                          defaultValue={col}
                          onChange={(e) => setPrimaryColor(e.target.value)}
                          className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                          title="Click to select, double click to custom pick"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 6. STATUS BAR */}
        {showStatusBar && (
          <div className="status-area h-[20px] bg-[#c0c0c0] border-t border-[#808080] flex items-center px-1 text-[10px] select-none shrink-0 gap-1">
            <div className="status-text flex-1 h-[16px] px-2 flex items-center border border-t-[#808080] border-l-[#808080] border-r-[#ffffff] border-b-[#ffffff] truncate">
              {statusMessage}
            </div>
            <div className="status-coordinates hidden sm:flex w-[80px] h-[16px] px-1 items-center border border-t-[#808080] border-l-[#808080] border-r-[#ffffff] border-b-[#ffffff]">
              {cursorPos.x !== null ? `${cursorPos.x}, ${cursorPos.y}` : ""}
            </div>
            <div className="status-coordinates w-[80px] sm:w-[90px] h-[16px] px-1 flex items-center border border-t-[#808080] border-l-[#808080] border-r-[#ffffff] border-b-[#ffffff]">
              {selectionDim
                ? `${selectionDim.w}x${selectionDim.h}`
                : `${canvasSize.width}x${canvasSize.height}px`}
            </div>
          </div>
        )}

        {/* 7. DIALOGS */}
        {activeDialog === "newConfirm" && (
          <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-[100] p-3">
            <div className="w-full max-w-[280px] bg-[#c0c0c0] border-2 border-t-[#ffffff] border-l-[#ffffff] border-r-[#808080] border-b-[#808080] shadow-[2px_2px_0px_#000] p-1 text-[11px]">
              <div className="bg-[#000080] text-white font-bold px-2 py-1 flex justify-between items-center mb-2">
                <span>Paint</span>
                <button
                  onClick={() => setActiveDialog(null)}
                  className="bg-[#c0c0c0] text-black w-4 h-4 flex items-center justify-center font-bold"
                >
                  ×
                </button>
              </div>
              <div className="p-3">
                <p className="mb-4">Create new blank image?</p>
                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => {
                      const canvas = canvasRef.current;
                      const ctx = canvas.getContext("2d", {
                        willReadFrequently: true,
                      });
                      ctx.fillStyle = "#ffffff";
                      ctx.fillRect(0, 0, canvas.width, canvas.height);
                      saveSnapshot();
                      setActiveDialog(null);
                    }}
                    className="px-4 py-1 border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080] active:border-black bg-[#c0c0c0]"
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => setActiveDialog(null)}
                    className="px-3 py-1 border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080] active:border-black bg-[#c0c0c0]"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeDialog === "about" && (
          <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-[100] p-3">
            <div className="w-full max-w-[320px] bg-[#c0c0c0] border-2 border-t-[#ffffff] border-l-[#ffffff] border-r-[#808080] border-b-[#808080] shadow-[2px_2px_0px_#000] p-1 text-[11px]">
              <div className="bg-[#000080] text-white font-bold px-2 py-1 flex justify-between items-center mb-2">
                <span>About Paint</span>
                <button
                  onClick={() => setActiveDialog(null)}
                  className="bg-[#c0c0c0] text-black w-4 h-4 flex items-center justify-center font-bold"
                >
                  ×
                </button>
              </div>
              <div className="p-3">
                <p className="font-bold mb-1">React MS Paint</p>
                <p className="text-gray-700 mb-4">
                  Complete retro drawing suite with image transformations,
                  Bezier curves, polygon editor, and floating typography.
                </p>
                <div className="flex justify-end">
                  <button
                    onClick={() => setActiveDialog(null)}
                    className="px-4 py-1 border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080] active:border-black bg-[#c0c0c0]"
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

