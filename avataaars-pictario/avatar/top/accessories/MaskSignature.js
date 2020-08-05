"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
//import { uniqueId } from 'lodash'
var MaskSignature = /** @class */ (function (_super) {
    __extends(MaskSignature, _super);
    function MaskSignature() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /*private path1 = uniqueId('react-path-')
    private path2 = uniqueId('react-path-')
    private filter1 = uniqueId('react-filter-')
    private linearGradient1 = uniqueId('react-linear-gradient-')
    private linearGradient2 = uniqueId('react-linear-gradient-')*/
    MaskSignature.prototype.render = function () {
        //const { path1, path2, filter1, linearGradient1, linearGradient2 } = this
        return (React.createElement("g", { id: 'Top/_Resources/MaskSignature', fill: 'none', transform: 'translate(62.000000, 85.000000)', strokeWidth: '1' },
            React.createElement("defs", null,
                React.createElement("clipPath", { id: "clip-path", transform: "translate(-313.3 -244.88)" },
                    React.createElement("path", { d: "M465.4,266.76q-2.5,18.5-5,37v0c-.07.38-.13.82-.18,1.29,0,0,0,.1,0,.16-.8,7.36-.71,24.94-11.33,41.26-10.48,16.1-34.1,26.7-53.52,26-19.42.73-43-9.87-53.52-26-10.62-16.32-10.53-33.9-11.33-41.26,0-.06,0-.11,0-.16,0-.47-.11-.91-.18-1.29v0q-2.5-18.48-5-37c11.49,18.21,21.82,23.4,30,23.88,13.76.81,21.15-11.68,40-11.85,18.9.17,26.28,12.66,40,11.85C443.59,290.16,453.91,285,465.4,266.76Z", fill: "#8c6046", stroke: "#232626", "stroke-linecap": "round", "stroke-miterlimit": "10", "stroke-width": "2" }))),
            React.createElement("path", { d: "M395.33,278.79H396", transform: "translate(-313.3 -244.88)", fill: "none", stroke: "#232626", "stroke-linecap": "round", "stroke-miterlimit": "10", "stroke-width": "2" }),
            React.createElement("path", { d: "M325.26,266.76h0a166.65,166.65,0,0,1-11-20.87", transform: "translate(-313.3 -244.88)", fill: "none", stroke: "#232626", "stroke-linecap": "round", "stroke-miterlimit": "10", "stroke-width": "2" }),
            React.createElement("line", { x1: "11.96", y1: "21.88", x2: "11.96", y2: "21.87", fill: "none", stroke: "#232626", "stroke-linecap": "round", "stroke-miterlimit": "10", "stroke-width": "2" }),
            React.createElement("path", { d: "M330.46,305l-.18-1.29", transform: "translate(-313.3 -244.88)", fill: "none", stroke: "#232626", "stroke-linecap": "round", "stroke-miterlimit": "10", "stroke-width": "2" }),
            React.createElement("path", { d: "M330.48,305.2c-4.67-2-11.51-2.26-16.18-4.24", transform: "translate(-313.3 -244.88)", fill: "none", stroke: "#232626", "stroke-linecap": "round", "stroke-miterlimit": "10", "stroke-width": "2" }),
            React.createElement("path", { d: "M396.82,372.35c-.49,0-1,.06-1.49.08", transform: "translate(-313.3 -244.88)", fill: "none", stroke: "#232626", "stroke-linecap": "round", "stroke-miterlimit": "10", "stroke-width": "2" }),
            React.createElement("path", { d: "M394.66,278.78h.67", transform: "translate(-313.3 -244.88)", fill: "none", stroke: "#232626", "stroke-linecap": "round", "stroke-miterlimit": "10", "stroke-width": "2" }),
            React.createElement("path", { d: "M465.4,266.76h0a166.65,166.65,0,0,0,11-20.87", transform: "translate(-313.3 -244.88)", fill: "none", stroke: "#232626", "stroke-linecap": "round", "stroke-miterlimit": "10", "stroke-width": "2" }),
            React.createElement("path", { d: "M465.4,266.76q-2.5,18.5-5,37v0c-.07.38-.13.82-.18,1.29,0,0,0,.1,0,.16-.8,7.36-.71,24.94-11.33,41.26-10.48,16.1-34.1,26.7-53.52,26-19.42.73-43-9.87-53.52-26-10.62-16.32-10.53-33.9-11.33-41.26,0-.06,0-.11,0-.16,0-.47-.11-.91-.18-1.29v0q-2.5-18.48-5-37c11.49,18.21,21.82,23.4,30,23.88,13.76.81,21.15-11.68,40-11.85,18.9.17,26.28,12.66,40,11.85C443.59,290.16,453.91,285,465.4,266.76Z", transform: "translate(-313.3 -244.88)", fill: "#8c6046" }),
            React.createElement("g", { "clip-path": "url(#clip-path)" },
                React.createElement("path", { d: "M331.54,317.62a1,1,0,1,1-2,0,1,1,0,1,1,2,0Z", transform: "translate(-313.3 -244.88)", fill: "#231f20" }),
                React.createElement("path", { d: "M333.4,314.21a15.84,15.84,0,0,1-3-4.36,16.94,16.94,0,0,1-3.08,4.32,16.51,16.51,0,0,1-4.59,3.26,14.65,14.65,0,0,1,4.45,2.82,14.81,14.81,0,0,1,3.45,4.8,13.64,13.64,0,0,1,2.86-4.54,13.81,13.81,0,0,1,4.49-3.13A15.71,15.71,0,0,1,333.4,314.21Zm-1.56,4.53c.07,3.34.13,1.95-1.22,4.55-1.78-2.43-1.45-1.76-1.54-2.64s0-.27-.07-1.81c-1.74-.1-1.34,0-2.25,0-.38,0-.17,0-1.25-.55a5.67,5.67,0,0,1-1-.74c0-.14,1.08-.69,1.22-.75,2-.85.76-.48,3.32-.57,0-1.06,0-.71,0-1.6a1.38,1.38,0,0,1,.3-1.08,15.71,15.71,0,0,1,1.18-2,16.1,16.1,0,0,1,1.05,2c.48,1,.26.11.26,1.22,0,1.4,0,1.52.1,1.54l1.31,0c1.48,0,.92-.14,3.31,1.13-1.93,1.22-1.2,1.21-2.14,1.26A18.21,18.21,0,0,1,331.84,318.74Z", transform: "translate(-313.3 -244.88)", fill: "#231f20" }),
                React.createElement("path", { d: "M333.23,316.26l-1.31,0c-.08,0-.08-.14-.1-1.54,0-1.11.22-.26-.26-1.22a16.1,16.1,0,0,0-1.05-2,15.71,15.71,0,0,0-1.18,2,1.38,1.38,0,0,0-.3,1.08c0,.89,0,.54,0,1.6-2.56.09-1.29-.28-3.32.57-.14.06-1.22.61-1.22.75a5.67,5.67,0,0,0,1,.74c1.08.55.87.54,1.25.55.91,0,.51-.08,2.25,0,.07,1.54,0,.84.07,1.81s-.24.21,1.54,2.64c1.35-2.6,1.29-1.21,1.22-4.55a18.21,18.21,0,0,0,2.56-.09c.94,0,.21,0,2.14-1.26C334.15,316.12,334.71,316.28,333.23,316.26Zm-2.68,2.37a1,1,0,0,1-1-1,1,1,0,1,1,2,0A1,1,0,0,1,330.55,318.63Z", transform: "translate(-313.3 -244.88)", fill: "none" }),
                React.createElement("path", { d: "M345.39,304.34l-1.32,0c-.09,0-.09-.14-.1-1.56,0-1.13.22-.27-.28-1.23a13.22,13.22,0,0,0-1.07-2,16.66,16.66,0,0,0-1.2,2.07,1.43,1.43,0,0,0-.3,1.1c0,.89,0,.54,0,1.62-2.6.09-1.31-.28-3.38.59-.14.05-1.24.61-1.24.75a5.76,5.76,0,0,0,1,.75c1.1.56.89.54,1.27.56.93.05.51-.09,2.29,0,.07,1.57,0,.86.07,1.85s-.25.21,1.55,2.69c1.39-2.65,1.32-1.22,1.25-4.64a18.83,18.83,0,0,0,2.6-.09c1-.05.21,0,2.18-1.27C346.34,304.2,346.89,304.36,345.39,304.34Zm-2.73,2.41a1,1,0,0,1-1-1,1,1,0,1,1,1,1Z", transform: "translate(-313.3 -244.88)", fill: "#231f20" }),
                React.createElement("text", { transform: "matrix(1.06, 0, -0.34, 0.94, 7.79, 54.54)", "font-size": "24.68", fill: "#232626", "font-family": "Intrepid" }, "P"),
                React.createElement("text", { transform: "translate(14.11 53.51) scale(1.04 1)", "font-size": "11.98", fill: "#232626", "font-family": "Intrepid" }, ".io"),
                React.createElement("path", { d: "M332.41,290.64a.73.73,0,0,1-.75.71.71.71,0,1,1,0-1.42A.73.73,0,0,1,332.41,290.64Z", transform: "translate(-313.3 -244.88)", fill: "#8c6046", stroke: "#232626", "stroke-miterlimit": "10", "stroke-width": "0.15" }),
                React.createElement("path", { d: "M380.64,317.86a1,1,0,0,1-1,1,1,1,0,0,1-1-1,1,1,0,0,1,1-1A1,1,0,0,1,380.64,317.86Z", transform: "translate(-313.3 -244.88)", fill: "#231f20" }),
                React.createElement("path", { d: "M382.5,314.44a15.68,15.68,0,0,1-3-4.35,16.77,16.77,0,0,1-3.09,4.32,16.49,16.49,0,0,1-4.58,3.26,14.65,14.65,0,0,1,4.45,2.82,14.86,14.86,0,0,1,3.45,4.8,13.57,13.57,0,0,1,2.85-4.54,13.93,13.93,0,0,1,4.5-3.13A15.78,15.78,0,0,1,382.5,314.44ZM380.93,319c.07,3.34.14,1.95-1.22,4.54-1.77-2.42-1.44-1.76-1.53-2.63s0-.28-.07-1.81c-1.74-.1-1.34,0-2.25,0-.38,0-.17,0-1.25-.55a5.77,5.77,0,0,1-1-.74c0-.14,1.08-.69,1.22-.75,2-.85.77-.48,3.33-.57,0-1.06,0-.72,0-1.6a1.42,1.42,0,0,1,.29-1.09,17.44,17.44,0,0,1,1.19-2,15.07,15.07,0,0,1,1,2c.49,1,.27.11.27,1.22,0,1.4,0,1.52.1,1.54l1.31,0c1.48,0,.92-.14,3.31,1.13-1.94,1.22-1.2,1.21-2.14,1.26A18.3,18.3,0,0,1,380.93,319Z", transform: "translate(-313.3 -244.88)", fill: "#231f20" }),
                React.createElement("path", { d: "M382.33,316.5l-1.31,0c-.09,0-.09-.14-.1-1.54,0-1.11.22-.26-.27-1.22a15.07,15.07,0,0,0-1-2,17.44,17.44,0,0,0-1.19,2,1.42,1.42,0,0,0-.29,1.09c0,.88,0,.54,0,1.6-2.56.09-1.29-.28-3.33.57-.14.06-1.22.61-1.22.75a5.77,5.77,0,0,0,1,.74c1.08.55.87.54,1.25.55.91,0,.51-.08,2.25,0,.07,1.53,0,.84.07,1.81s-.24.21,1.53,2.63c1.36-2.59,1.29-1.2,1.22-4.54a18.3,18.3,0,0,0,2.57-.09c.94-.05.2,0,2.14-1.26C383.25,316.36,383.81,316.52,382.33,316.5Zm-2.69,2.37a1,1,0,0,1-1-1,1,1,0,0,1,1-1,1,1,0,0,1,1,1A1,1,0,0,1,379.64,318.87Z", transform: "translate(-313.3 -244.88)", fill: "none" }),
                React.createElement("path", { d: "M370.25,304.58c-.23,0-1.15,0-1.32,0s-.09-.13-.11-1.55c0-1.13.23-.28-.28-1.23a12.76,12.76,0,0,0-1.06-2,15.68,15.68,0,0,0-1.2,2.08,1.42,1.42,0,0,0-.3,1.1c0,.89,0,.54,0,1.62-2.59.08-1.3-.28-3.38.59-.14.05-1.23.61-1.23.75a5.41,5.41,0,0,0,1,.75c1.09.56.89.54,1.27.56.92.05.5-.09,2.28,0,.07,1.57,0,.86.07,1.85s-.24.21,1.55,2.69c1.4-2.65,1.33-1.22,1.26-4.64a18.69,18.69,0,0,0,2.59-.09c1-.05.21,0,2.18-1.27C371.19,304.44,371.75,304.6,370.25,304.58Zm-2.74,2.4a1,1,0,0,1-1-1,1,1,0,1,1,1,1Z", transform: "translate(-313.3 -244.88)", fill: "#231f20" }),
                React.createElement("path", { d: "M394.49,304.58c-.22,0-1.15,0-1.32,0s-.09-.13-.11-1.55c0-1.13.23-.28-.27-1.23a13.46,13.46,0,0,0-1.07-2,15.68,15.68,0,0,0-1.2,2.08,1.42,1.42,0,0,0-.3,1.1c0,.89,0,.54,0,1.62-2.6.08-1.31-.28-3.38.59-.14.05-1.24.61-1.24.75a5.76,5.76,0,0,0,1,.75c1.1.56.89.54,1.27.56.93.05.51-.09,2.29,0,.07,1.57,0,.86.07,1.85s-.25.21,1.55,2.69c1.39-2.65,1.32-1.22,1.25-4.64a18.83,18.83,0,0,0,2.6-.09c1-.05.21,0,2.18-1.27C395.43,304.44,396,304.6,394.49,304.58Zm-2.73,2.4a1,1,0,0,1-1-1,1,1,0,1,1,2,0A1,1,0,0,1,391.76,307Z", transform: "translate(-313.3 -244.88)", fill: "#231f20" }),
                React.createElement("path", { d: "M355.55,311.7a6.24,6.24,0,1,0,6.26,6.24A6.25,6.25,0,0,0,355.55,311.7Zm2.7,8.7a1.2,1.2,0,0,1-.37,0,1,1,0,0,1,0,.35,2.39,2.39,0,1,1-4.72,0,1.34,1.34,0,0,1,0-.35,1.14,1.14,0,0,1-.37,0,2.4,2.4,0,1,1,0-4.74.24.24,0,1,0,.34-.34,2.39,2.39,0,1,1,4.72,0,1.14,1.14,0,0,1,0,.37,1.58,1.58,0,0,1,.37,0,2.4,2.4,0,1,1,0,4.74Z", transform: "translate(-313.3 -244.88)", fill: "#231f20" }),
                React.createElement("path", { d: "M356.72,317.9a1.16,1.16,0,1,1-1.17-1.15A1.17,1.17,0,0,1,356.72,317.9Z", transform: "translate(-313.3 -244.88)", fill: "#231f20" }),
                React.createElement("text", { transform: "matrix(1.06, 0, -0.34, 0.94, 56.89, 54.78)", "font-size": "24.68", fill: "#232626", "font-family": "Intrepid" }, "P"),
                React.createElement("text", { transform: "translate(63.21 53.75) scale(1.04 1)", "font-size": "11.98", fill: "#232626", "font-family": "Intrepid" }, ".io"),
                React.createElement("path", { d: "M381.5,290.88a.74.74,0,1,1-.74-.71A.73.73,0,0,1,381.5,290.88Z", transform: "translate(-313.3 -244.88)", fill: "#8c6046", stroke: "#232626", "stroke-miterlimit": "10", "stroke-width": "0.15" }),
                React.createElement("path", { d: "M394.29,275.81c-.22,0-1.15,0-1.32,0s-.09-.14-.11-1.55c0-1.13.23-.28-.28-1.24a12.54,12.54,0,0,0-1.06-2,15.49,15.49,0,0,0-1.2,2.07,1.43,1.43,0,0,0-.3,1.1c0,.89,0,.54,0,1.62-2.6.09-1.31-.28-3.38.6a5,5,0,0,0-1.24.74,5.76,5.76,0,0,0,1,.75c1.1.56.89.54,1.27.56.93.05.51-.09,2.29,0,.06,1.57,0,.85.06,1.85s-.24.21,1.56,2.68c1.39-2.65,1.32-1.22,1.25-4.64a17.38,17.38,0,0,0,2.6-.08c1-.05.21,0,2.18-1.27C395.23,275.67,395.79,275.82,394.29,275.81Zm-2.73,2.4a1,1,0,1,1,1-1A1,1,0,0,1,391.56,278.21Z", transform: "translate(-313.3 -244.88)", fill: "#231f20" }),
                React.createElement("path", { d: "M356.77,291.69a1,1,0,1,1-2,0,1,1,0,1,1,2,0Z", transform: "translate(-313.3 -244.88)", fill: "#231f20" }),
                React.createElement("path", { d: "M358.63,288.28a15.84,15.84,0,0,1-3-4.36,16.94,16.94,0,0,1-3.08,4.32,16.51,16.51,0,0,1-4.59,3.26,14.65,14.65,0,0,1,4.45,2.82,15,15,0,0,1,3.45,4.8,13.47,13.47,0,0,1,2.86-4.54,13.81,13.81,0,0,1,4.49-3.13A15.71,15.71,0,0,1,358.63,288.28Zm-1.57,4.53c.07,3.34.14,1.95-1.22,4.55-1.77-2.43-1.44-1.76-1.53-2.64s0-.27-.07-1.81c-1.74-.1-1.34,0-2.25,0-.38,0-.17,0-1.25-.55a5.77,5.77,0,0,1-1-.74c0-.14,1.09-.69,1.22-.75,2-.85.77-.48,3.33-.57,0-1.06,0-.72,0-1.6a1.38,1.38,0,0,1,.3-1.08,15.71,15.71,0,0,1,1.18-2,16.1,16.1,0,0,1,1.05,2c.48,1,.26.11.26,1.22,0,1.4,0,1.52.1,1.54l1.31,0c1.48,0,.92-.14,3.31,1.13-1.93,1.22-1.2,1.21-2.14,1.26A18.3,18.3,0,0,1,357.06,292.81Z", transform: "translate(-313.3 -244.88)", fill: "#231f20" }),
                React.createElement("path", { d: "M358.46,290.33l-1.31,0c-.09,0-.09-.14-.1-1.54,0-1.11.22-.26-.26-1.22a16.1,16.1,0,0,0-1.05-2,15.71,15.71,0,0,0-1.18,2,1.38,1.38,0,0,0-.3,1.08c0,.88,0,.54,0,1.6-2.56.09-1.29-.28-3.33.57-.13.06-1.22.61-1.22.75a5.77,5.77,0,0,0,1,.74c1.08.55.87.54,1.25.55.91,0,.51-.08,2.25,0,.07,1.54,0,.84.07,1.81s-.24.21,1.53,2.64c1.36-2.6,1.29-1.21,1.22-4.55a18.3,18.3,0,0,0,2.57-.09c.94-.05.21,0,2.14-1.26C359.38,290.19,359.94,290.35,358.46,290.33Zm-2.68,2.37a1,1,0,0,1-1-1,1,1,0,1,1,2,0A1,1,0,0,1,355.78,292.7Z", transform: "translate(-313.3 -244.88)", fill: "none" }),
                React.createElement("path", { d: "M428.65,318a1,1,0,0,1-1,1,1,1,0,0,1-1-1,1,1,0,0,1,1-1A1,1,0,0,1,428.65,318Z", transform: "translate(-313.3 -244.88)", fill: "#231f20" }),
                React.createElement("path", { d: "M430.51,314.59a15.34,15.34,0,0,1-3-4.36,16.61,16.61,0,0,1-3.09,4.32,16.42,16.42,0,0,1-4.58,3.26,14.82,14.82,0,0,1,7.89,7.62,13.7,13.7,0,0,1,7.36-7.67A15.51,15.51,0,0,1,430.51,314.59Zm-1.57,4.53c.07,3.35.14,1.95-1.22,4.55-1.78-2.42-1.44-1.76-1.53-2.63s0-.28-.07-1.82c-1.74-.1-1.34,0-2.25,0-.38,0-.17,0-1.25-.56a5.74,5.74,0,0,1-1-.73c0-.14,1.08-.7,1.22-.75,2-.86.77-.49,3.33-.58,0-1.06,0-.71,0-1.6a1.39,1.39,0,0,1,.29-1.08,17.67,17.67,0,0,1,1.19-2,14.71,14.71,0,0,1,1,2c.49,1,.26.1.26,1.22,0,1.39,0,1.51.11,1.53s1.08,0,1.31,0c1.48,0,.92-.14,3.31,1.13-1.94,1.22-1.2,1.2-2.15,1.25A18.15,18.15,0,0,1,428.94,319.12Z", transform: "translate(-313.3 -244.88)", fill: "#231f20" }),
                React.createElement("path", { d: "M430.34,316.65c-.23,0-1.14,0-1.31,0s-.09-.14-.11-1.53c0-1.12.23-.26-.26-1.22a14.71,14.71,0,0,0-1-2,17.67,17.67,0,0,0-1.19,2,1.39,1.39,0,0,0-.29,1.08c0,.89,0,.54,0,1.6-2.56.09-1.29-.28-3.33.58-.14.05-1.22.61-1.22.75a5.74,5.74,0,0,0,1,.73c1.08.56.87.54,1.25.56.91,0,.51-.09,2.25,0,.07,1.54,0,.84.07,1.82s-.25.21,1.53,2.63c1.36-2.6,1.29-1.2,1.22-4.55a18.15,18.15,0,0,0,2.56-.09c.95,0,.21,0,2.15-1.25C431.26,316.51,431.82,316.66,430.34,316.65ZM427.65,319a1,1,0,0,1-1-1,1,1,0,0,1,1-1,1,1,0,0,1,1,1A1,1,0,0,1,427.65,319Z", transform: "translate(-313.3 -244.88)", fill: "none" }),
                React.createElement("path", { d: "M418.26,304.72c-.23,0-1.15,0-1.33,0s-.08-.14-.1-1.55c0-1.13.23-.28-.28-1.24a12.54,12.54,0,0,0-1.06-2,16.56,16.56,0,0,0-1.21,2.07,1.47,1.47,0,0,0-.29,1.1c0,.89,0,.54,0,1.62-2.59.09-1.3-.28-3.38.59-.14.06-1.24.61-1.24.75a5.5,5.5,0,0,0,1,.75c1.09.56.88.54,1.27.56.92.05.5-.09,2.28,0,.07,1.57,0,.85.07,1.85s-.24.2,1.55,2.68c1.4-2.65,1.33-1.22,1.26-4.64a17.25,17.25,0,0,0,2.59-.08c1-.06.21,0,2.18-1.28C419.2,304.58,419.76,304.74,418.26,304.72Zm-2.74,2.41a1,1,0,0,1,0-2.06,1,1,0,0,1,0,2.06Z", transform: "translate(-313.3 -244.88)", fill: "#231f20" }),
                React.createElement("path", { d: "M442.5,304.72c-.22,0-1.15,0-1.32,0s-.09-.14-.11-1.55c0-1.13.23-.28-.28-1.24a12.54,12.54,0,0,0-1.06-2,15.49,15.49,0,0,0-1.2,2.07,1.43,1.43,0,0,0-.3,1.1c0,.89,0,.54,0,1.62-2.6.09-1.31-.28-3.38.59-.14.06-1.24.61-1.24.75a5.41,5.41,0,0,0,1,.75c1.1.56.89.54,1.27.56.93.05.51-.09,2.28,0,.07,1.57,0,.85.07,1.85s-.24.2,1.56,2.68c1.39-2.65,1.32-1.22,1.25-4.64a17.38,17.38,0,0,0,2.6-.08c1-.06.21,0,2.18-1.28C443.44,304.58,444,304.74,442.5,304.72Zm-2.73,2.41a1,1,0,1,1,1-1A1,1,0,0,1,439.77,307.13Z", transform: "translate(-313.3 -244.88)", fill: "#231f20" }),
                React.createElement("path", { d: "M403.56,311.84a6.24,6.24,0,1,0,6.25,6.24A6.24,6.24,0,0,0,403.56,311.84Zm2.7,8.7a1.54,1.54,0,0,1-.37,0,.94.94,0,0,1,0,.34,2.4,2.4,0,1,1-4.73,0,.94.94,0,0,1,0-.34,1.5,1.5,0,0,1-.37,0,2.4,2.4,0,1,1,0-4.74,1.14,1.14,0,0,1,.37,0,1.2,1.2,0,0,1,0-.37,2.39,2.39,0,1,1,4.73,0,1.2,1.2,0,0,1,0,.37,1.17,1.17,0,0,1,.37,0,2.4,2.4,0,1,1,0,4.74Z", transform: "translate(-313.3 -244.88)", fill: "#231f20" }),
                React.createElement("path", { d: "M404.73,318.05a1.16,1.16,0,1,1-2.32,0,1.16,1.16,0,0,1,2.32,0Z", transform: "translate(-313.3 -244.88)", fill: "#231f20" }),
                React.createElement("text", { transform: "matrix(1.06, 0, -0.34, 0.94, 104.89, 54.92)", "font-size": "24.68", fill: "#232626", "font-family": "Intrepid" }, "P"),
                React.createElement("text", { transform: "translate(111.21 53.89) scale(1.04 1)", "font-size": "11.98", fill: "#232626", "font-family": "Intrepid" }, ".io"),
                React.createElement("path", { d: "M429.51,291a.74.74,0,1,1-.74-.71A.73.73,0,0,1,429.51,291Z", transform: "translate(-313.3 -244.88)", fill: "#8c6046", stroke: "#232626", "stroke-miterlimit": "10", "stroke-width": "0.15" }),
                React.createElement("path", { d: "M404.78,291.84a1,1,0,0,1-1,1,1,1,0,0,1-1-1,1,1,0,0,1,1-1A1,1,0,0,1,404.78,291.84Z", transform: "translate(-313.3 -244.88)", fill: "#231f20" }),
                React.createElement("path", { d: "M406.64,288.42a15.56,15.56,0,0,1-3-4.36,16.44,16.44,0,0,1-3.09,4.32,16.08,16.08,0,0,1-4.58,3.26,14.71,14.71,0,0,1,4.45,2.83,15,15,0,0,1,3.45,4.79,13.65,13.65,0,0,1,2.85-4.53,14,14,0,0,1,4.5-3.14A15.51,15.51,0,0,1,406.64,288.42ZM405.07,293c.07,3.35.14,1.95-1.22,4.55-1.77-2.42-1.44-1.76-1.53-2.63s0-.28-.07-1.81a21.47,21.47,0,0,0-2.25,0c-.38,0-.17,0-1.25-.56a5.27,5.27,0,0,1-1-.73c0-.14,1.08-.7,1.22-.75,2-.85.77-.49,3.33-.58,0-1.06,0-.71,0-1.6a1.44,1.44,0,0,1,.29-1.08,17.67,17.67,0,0,1,1.19-2,15.38,15.38,0,0,1,1,2c.49,1,.27.1.27,1.22,0,1.39,0,1.51.1,1.53s1.08,0,1.31,0c1.48,0,.92-.14,3.31,1.13-1.94,1.22-1.2,1.2-2.14,1.25A18.3,18.3,0,0,1,405.07,293Z", transform: "translate(-313.3 -244.88)", fill: "#231f20" }),
                React.createElement("path", { d: "M406.47,290.48c-.23,0-1.13,0-1.31,0s-.09-.14-.1-1.53c0-1.12.22-.26-.27-1.22a15.38,15.38,0,0,0-1-2,17.67,17.67,0,0,0-1.19,2,1.44,1.44,0,0,0-.29,1.08c0,.89,0,.54,0,1.6-2.56.09-1.29-.27-3.33.58-.14.05-1.22.61-1.22.75a5.27,5.27,0,0,0,1,.73c1.08.56.87.54,1.25.56a21.47,21.47,0,0,1,2.25,0c.07,1.53,0,.83.07,1.81s-.24.21,1.53,2.63c1.36-2.6,1.29-1.2,1.22-4.55a18.3,18.3,0,0,0,2.57-.09c.94-.05.2,0,2.14-1.25C407.39,290.34,408,290.49,406.47,290.48Zm-2.69,2.37a1,1,0,0,1-1-1,1,1,0,0,1,1-1,1,1,0,0,1,1,1A1,1,0,0,1,403.78,292.85Z", transform: "translate(-313.3 -244.88)", fill: "none" }),
                React.createElement("path", { d: "M452.66,312.08a6.24,6.24,0,1,0,6.25,6.24A6.24,6.24,0,0,0,452.66,312.08Zm2.7,8.7a1.14,1.14,0,0,1-.37,0,1,1,0,0,1,0,.35,2.39,2.39,0,1,1-4.73,0,1,1,0,0,1,0-.35,1.17,1.17,0,0,1-.37,0,2.4,2.4,0,1,1,0-4.74,1.54,1.54,0,0,1,.37,0,1.11,1.11,0,0,1,0-.36,2.39,2.39,0,1,1,4.73,0,1.11,1.11,0,0,1,0,.36,1.5,1.5,0,0,1,.37,0,2.4,2.4,0,1,1,0,4.74Z", transform: "translate(-313.3 -244.88)", fill: "#231f20" }),
                React.createElement("path", { d: "M453.82,318.29a1.16,1.16,0,1,1-2.31,0,1.16,1.16,0,0,1,2.31,0Z", transform: "translate(-313.3 -244.88)", fill: "#231f20" }),
                React.createElement("path", { d: "M467.16,276.19c-.23,0-1.15,0-1.33,0s-.09-.14-.1-1.55c0-1.13.22-.28-.28-1.23a14.72,14.72,0,0,0-1.06-2,15.6,15.6,0,0,0-1.21,2.08,1.42,1.42,0,0,0-.29,1.1c0,.88,0,.54,0,1.62-2.6.08-1.31-.28-3.38.59-.14,0-1.24.61-1.24.75a5.76,5.76,0,0,0,1,.75c1.1.56.89.54,1.28.56.92,0,.5-.09,2.28,0,.07,1.57,0,.86.07,1.85s-.25.21,1.55,2.68c1.39-2.64,1.32-1.22,1.25-4.63a18.78,18.78,0,0,0,2.6-.09c1-.05.21,0,2.18-1.27C468.1,276.05,468.66,276.21,467.16,276.19Zm-2.74,2.4a1,1,0,0,1-1-1,1,1,0,1,1,1,1Z", transform: "translate(-313.3 -244.88)", fill: "#231f20" }),
                React.createElement("path", { d: "M453.88,292.07a1,1,0,0,1-1,1,1,1,0,0,1-1-1,1,1,0,0,1,1-1A1,1,0,0,1,453.88,292.07Z", transform: "translate(-313.3 -244.88)", fill: "#231f20" }),
                React.createElement("path", { d: "M455.74,288.66a15.34,15.34,0,0,1-3-4.36,16.61,16.61,0,0,1-3.09,4.32,16.42,16.42,0,0,1-4.58,3.26,14.82,14.82,0,0,1,7.89,7.62,13.7,13.7,0,0,1,7.36-7.67A15.51,15.51,0,0,1,455.74,288.66Zm-1.57,4.53c.07,3.35.14,1.95-1.22,4.55-1.78-2.42-1.44-1.76-1.53-2.63s0-.28-.07-1.82c-1.74-.1-1.34,0-2.25,0-.38,0-.17,0-1.25-.56a5.74,5.74,0,0,1-1-.73c0-.14,1.08-.7,1.22-.75,2-.86.77-.49,3.33-.58,0-1.06,0-.71,0-1.6a1.39,1.39,0,0,1,.29-1.08,17.67,17.67,0,0,1,1.19-2,14.71,14.71,0,0,1,1,2c.49,1,.26.1.26,1.22,0,1.39,0,1.51.11,1.53s1.08,0,1.31,0c1.48,0,.92-.14,3.31,1.13-1.94,1.22-1.2,1.2-2.15,1.25A18.15,18.15,0,0,1,454.17,293.19Z", transform: "translate(-313.3 -244.88)", fill: "#231f20" }),
                React.createElement("path", { d: "M455.57,290.72c-.23,0-1.14,0-1.31,0s-.09-.14-.11-1.53c0-1.12.23-.26-.26-1.22a14.71,14.71,0,0,0-1-2,17.67,17.67,0,0,0-1.19,2,1.39,1.39,0,0,0-.29,1.08c0,.89,0,.54,0,1.6-2.56.09-1.29-.28-3.33.58-.14.05-1.22.61-1.22.75a5.74,5.74,0,0,0,1,.73c1.08.56.87.54,1.25.56.91,0,.51-.09,2.25,0,.07,1.54,0,.84.07,1.82s-.25.21,1.53,2.63c1.36-2.6,1.29-1.2,1.22-4.55a18.15,18.15,0,0,0,2.56-.09c.95-.05.21,0,2.15-1.25C456.49,290.58,457.05,290.73,455.57,290.72Zm-2.69,2.37a1,1,0,0,1-1-1,1,1,0,0,1,1-1,1,1,0,0,1,1,1A1,1,0,0,1,452.88,293.09Z", transform: "translate(-313.3 -244.88)", fill: "none" }),
                React.createElement("path", { d: "M345.61,328.28c-.22,0-1.15,0-1.32,0s-.09-.14-.11-1.55c0-1.13.23-.28-.27-1.23a13.46,13.46,0,0,0-1.07-2,15.68,15.68,0,0,0-1.2,2.08,1.42,1.42,0,0,0-.3,1.1c0,.88,0,.54,0,1.62-2.6.08-1.31-.28-3.38.59-.14.05-1.24.61-1.24.75a5.76,5.76,0,0,0,1,.75c1.1.56.89.54,1.27.56.93.05.51-.09,2.29,0,.07,1.57,0,.86.07,1.85s-.25.21,1.55,2.69c1.39-2.65,1.32-1.22,1.25-4.64a18.83,18.83,0,0,0,2.6-.09c1-.05.21,0,2.18-1.27C346.55,328.14,347.11,328.3,345.61,328.28Zm-2.73,2.4a1,1,0,0,1-1-1,1,1,0,1,1,2,0A1,1,0,0,1,342.88,330.68Z", transform: "translate(-313.3 -244.88)", fill: "#231f20" }),
                React.createElement("path", { d: "M381.06,370.57a1,1,0,0,1-1,1,1,1,0,0,1-1-1,1,1,0,0,1,1-1A1,1,0,0,1,381.06,370.57Z", transform: "translate(-313.3 -244.88)", fill: "#231f20" }),
                React.createElement("path", { d: "M382.92,367.16a15.48,15.48,0,0,1-3-4.36,16.58,16.58,0,0,1-7.67,7.58,14.5,14.5,0,0,1,4.44,2.82,14.76,14.76,0,0,1,3.45,4.8,13.69,13.69,0,0,1,2.86-4.53,14,14,0,0,1,4.5-3.14A15.51,15.51,0,0,1,382.92,367.16Zm-1.57,4.53c.07,3.35.14,1.95-1.22,4.55-1.78-2.43-1.44-1.76-1.53-2.63s0-.28-.07-1.82c-1.74-.1-1.34,0-2.25,0-.38,0-.17,0-1.25-.56a5.74,5.74,0,0,1-1-.73c0-.14,1.08-.7,1.22-.75,2-.86.77-.49,3.33-.58,0-1.06,0-.71,0-1.6a1.39,1.39,0,0,1,.29-1.08,16.85,16.85,0,0,1,1.19-2,14.71,14.71,0,0,1,1,2c.49.95.26.1.26,1.22,0,1.39,0,1.51.11,1.53s1.08,0,1.31,0c1.48,0,.92-.14,3.31,1.14-1.94,1.22-1.2,1.2-2.15,1.25A18.15,18.15,0,0,1,381.35,371.69Z", transform: "translate(-313.3 -244.88)", fill: "#231f20" }),
                React.createElement("path", { d: "M382.75,369.21c-.23,0-1.14,0-1.31,0s-.09-.14-.11-1.53c0-1.12.23-.27-.26-1.22a14.71,14.71,0,0,0-1-2,16.85,16.85,0,0,0-1.19,2,1.39,1.39,0,0,0-.29,1.08c0,.89,0,.54,0,1.6-2.56.09-1.29-.28-3.33.58-.14.05-1.22.61-1.22.75a5.74,5.74,0,0,0,1,.73c1.08.56.87.54,1.25.56.91,0,.51-.09,2.25,0,.07,1.54,0,.84.07,1.82s-.25.2,1.53,2.63c1.36-2.6,1.29-1.2,1.22-4.55a18.15,18.15,0,0,0,2.56-.09c.95-.05.21,0,2.15-1.25C383.67,369.07,384.23,369.23,382.75,369.21Zm-2.69,2.37a1,1,0,0,1-1-1,1,1,0,0,1,1-1,1,1,0,0,1,1,1A1,1,0,0,1,380.06,371.58Z", transform: "translate(-313.3 -244.88)", fill: "none" }),
                React.createElement("path", { d: "M370.67,357.29l-1.33,0c-.08,0-.08-.14-.1-1.55,0-1.14.23-.28-.28-1.24a12.54,12.54,0,0,0-1.06-2,16.56,16.56,0,0,0-1.21,2.07,1.47,1.47,0,0,0-.29,1.1c0,.89,0,.54,0,1.62-2.59.09-1.3-.28-3.38.59-.14.05-1.24.61-1.24.75a5.5,5.5,0,0,0,1,.75c1.09.56.88.54,1.27.56.92.05.5-.09,2.28,0,.07,1.57,0,.85.07,1.84s-.24.21,1.55,2.69c1.4-2.65,1.33-1.22,1.26-4.64a18.69,18.69,0,0,0,2.59-.09c1,0,.21,0,2.18-1.27C371.61,357.15,372.17,357.31,370.67,357.29Zm-2.74,2.41a1,1,0,0,1-1-1,1,1,0,0,1,1-1,1,1,0,0,1,1,1A1,1,0,0,1,367.93,359.7Z", transform: "translate(-313.3 -244.88)", fill: "#231f20" }),
                React.createElement("path", { d: "M394.91,357.29l-1.32,0c-.09,0-.09-.14-.11-1.55,0-1.14.23-.28-.28-1.24a12.54,12.54,0,0,0-1.06-2,15.49,15.49,0,0,0-1.2,2.07,1.43,1.43,0,0,0-.3,1.1c0,.89,0,.54,0,1.62-2.6.09-1.31-.28-3.38.59-.14.05-1.24.61-1.24.75a5.41,5.41,0,0,0,1,.75c1.1.56.89.54,1.27.56.93.05.51-.09,2.28,0,.07,1.57,0,.85.07,1.84s-.24.21,1.56,2.69c1.39-2.65,1.32-1.22,1.25-4.64a18.83,18.83,0,0,0,2.6-.09c1,0,.21,0,2.18-1.27C395.85,357.15,396.41,357.31,394.91,357.29Zm-2.73,2.41a1,1,0,0,1-1-1,1,1,0,1,1,2,0A1,1,0,0,1,392.18,359.7Z", transform: "translate(-313.3 -244.88)", fill: "#231f20" }),
                React.createElement("text", { transform: "matrix(1.06, 0, -0.34, 0.94, 57.31, 107.49)", "font-size": "24.68", fill: "#232626", "font-family": "Intrepid" }, "P"),
                React.createElement("text", { transform: "translate(63.62 106.46) scale(1.04 1)", "font-size": "11.98", fill: "#232626", "font-family": "Intrepid" }, ".io"),
                React.createElement("path", { d: "M381.92,343.59a.74.74,0,1,1-.74-.71A.73.73,0,0,1,381.92,343.59Z", transform: "translate(-313.3 -244.88)", fill: "#8c6046", stroke: "#232626", "stroke-miterlimit": "10", "stroke-width": "0.15" }),
                React.createElement("path", { d: "M370.47,328.52c-.23,0-1.15,0-1.33,0s-.08-.14-.1-1.55c0-1.13.23-.28-.28-1.24a12.54,12.54,0,0,0-1.06-2,15.6,15.6,0,0,0-1.21,2.08,1.43,1.43,0,0,0-.29,1.09c0,.89,0,.55,0,1.63-2.59.08-1.3-.28-3.38.59-.14.05-1.24.61-1.24.75a6,6,0,0,0,1,.75c1.09.55.88.54,1.27.55.92.06.5-.08,2.28,0,.07,1.57,0,.86.07,1.85s-.24.21,1.55,2.68c1.4-2.65,1.33-1.22,1.26-4.63a18.69,18.69,0,0,0,2.59-.09c1-.05.21,0,2.18-1.27C371.41,328.38,372,328.54,370.47,328.52Zm-2.74,2.4a1,1,0,0,1-1-1,1,1,0,0,1,1-1,1,1,0,0,1,1,1A1,1,0,0,1,367.73,330.92Z", transform: "translate(-313.3 -244.88)", fill: "#231f20" }),
                React.createElement("path", { d: "M394.71,328.52c-.23,0-1.15,0-1.32,0s-.09-.14-.11-1.55c0-1.13.23-.28-.28-1.24a12.54,12.54,0,0,0-1.06-2,15.68,15.68,0,0,0-1.2,2.08,1.4,1.4,0,0,0-.3,1.09c0,.89,0,.55,0,1.63-2.6.08-1.31-.28-3.38.59-.14.05-1.24.61-1.24.75a5.89,5.89,0,0,0,1,.75c1.1.55.89.54,1.27.55.92.06.51-.08,2.28,0,.07,1.57,0,.86.07,1.85s-.24.21,1.55,2.68c1.4-2.65,1.33-1.22,1.26-4.63a18.83,18.83,0,0,0,2.6-.09c1-.05.21,0,2.18-1.27C395.65,328.38,396.21,328.54,394.71,328.52Zm-2.73,2.4a1,1,0,0,1-1-1,1,1,0,1,1,2,0A1,1,0,0,1,392,330.92Z", transform: "translate(-313.3 -244.88)", fill: "#231f20" }),
                React.createElement("path", { d: "M357.19,344.4a1,1,0,0,1-1,1,1,1,0,0,1-1-1,1,1,0,0,1,1-1A1,1,0,0,1,357.19,344.4Z", transform: "translate(-313.3 -244.88)", fill: "#231f20" }),
                React.createElement("path", { d: "M359.05,341a15.7,15.7,0,0,1-3-4.36,16.58,16.58,0,0,1-7.67,7.58A14.71,14.71,0,0,1,352.8,347a15,15,0,0,1,3.45,4.79,13.65,13.65,0,0,1,2.85-4.53,14,14,0,0,1,4.5-3.14A15.51,15.51,0,0,1,359.05,341Zm-1.57,4.53c.07,3.35.14,2-1.22,4.55-1.77-2.42-1.44-1.76-1.53-2.63s0-.28-.07-1.82c-1.74-.1-1.34,0-2.25,0-.38,0-.17,0-1.25-.56a5.74,5.74,0,0,1-1-.73c0-.14,1.08-.7,1.22-.75,2-.86.77-.49,3.33-.58,0-1.06,0-.71,0-1.6a1.43,1.43,0,0,1,.29-1.08,16.85,16.85,0,0,1,1.19-2,14.71,14.71,0,0,1,1,2c.49.95.27.1.27,1.22,0,1.39,0,1.51.1,1.53s1.08,0,1.31,0c1.48,0,.92-.13,3.31,1.14-1.94,1.22-1.2,1.2-2.14,1.25A18.3,18.3,0,0,1,357.48,345.52Z", transform: "translate(-313.3 -244.88)", fill: "#231f20" }),
                React.createElement("path", { d: "M358.88,343c-.23,0-1.13,0-1.31,0s-.09-.14-.1-1.53c0-1.12.22-.27-.27-1.22a14.71,14.71,0,0,0-1-2,16.85,16.85,0,0,0-1.19,2,1.43,1.43,0,0,0-.29,1.08c0,.89,0,.54,0,1.6-2.56.09-1.29-.28-3.33.58-.14.05-1.22.61-1.22.75a5.74,5.74,0,0,0,1,.73c1.08.56.87.54,1.25.56.91,0,.51-.09,2.25,0,.07,1.54,0,.84.07,1.82s-.24.21,1.53,2.63c1.36-2.6,1.29-1.2,1.22-4.55a18.3,18.3,0,0,0,2.57-.09c.94-.05.2,0,2.14-1.25C359.8,342.91,360.36,343.06,358.88,343Zm-2.69,2.38a1,1,0,0,1-1-1,1,1,0,0,1,1-1,1,1,0,0,1,1,1A1,1,0,0,1,356.19,345.42Z", transform: "translate(-313.3 -244.88)", fill: "none" }),
                React.createElement("path", { d: "M418.68,357.44c-.23,0-1.15,0-1.33,0s-.08-.14-.1-1.55c0-1.13.22-.28-.28-1.24a12.54,12.54,0,0,0-1.06-2,15,15,0,0,0-1.21,2.08,1.39,1.39,0,0,0-.29,1.09c0,.89,0,.54,0,1.62-2.59.09-1.31-.27-3.38.6-.14,0-1.24.61-1.24.75a7,7,0,0,0,1,.75c1.1.55.89.54,1.28.55.92.06.5-.08,2.28,0,.07,1.57,0,.86.07,1.85s-.24.21,1.55,2.68c1.4-2.65,1.33-1.22,1.26-4.63a18.69,18.69,0,0,0,2.59-.09c1-.05.21,0,2.18-1.27C419.62,357.3,420.18,357.45,418.68,357.44Zm-2.74,2.4a1,1,0,0,1-1-1,1,1,0,0,1,1-1,1,1,0,0,1,1,1A1,1,0,0,1,415.94,359.84Z", transform: "translate(-313.3 -244.88)", fill: "#231f20" }),
                React.createElement("path", { d: "M442.92,357.44c-.23,0-1.15,0-1.32,0s-.09-.14-.11-1.55c0-1.13.23-.28-.28-1.24a12.54,12.54,0,0,0-1.06-2,15.06,15.06,0,0,0-1.2,2.08,1.4,1.4,0,0,0-.3,1.09c0,.89,0,.54,0,1.62-2.6.09-1.31-.27-3.39.6-.14,0-1.23.61-1.23.75a6.46,6.46,0,0,0,1,.75c1.1.55.89.54,1.27.55.92.06.51-.08,2.28,0,.07,1.57,0,.86.07,1.85s-.24.21,1.55,2.68c1.4-2.65,1.33-1.22,1.26-4.63a18.89,18.89,0,0,0,2.6-.09c.95-.05.21,0,2.17-1.27C443.86,357.3,444.42,357.45,442.92,357.44Zm-2.74,2.4a1,1,0,0,1-1-1,1,1,0,0,1,2,0A1,1,0,0,1,440.18,359.84Z", transform: "translate(-313.3 -244.88)", fill: "#231f20" }),
                React.createElement("path", { d: "M404,364.56a6.24,6.24,0,1,0,6.25,6.24A6.24,6.24,0,0,0,404,364.56Zm2.7,8.69a1.54,1.54,0,0,1-.37,0,1,1,0,0,1,0,.35,2.39,2.39,0,1,1-4.73,0,1,1,0,0,1,0-.35,1.54,1.54,0,0,1-.37,0,2.4,2.4,0,1,1,0-4.74.24.24,0,1,0,.33-.33,2.39,2.39,0,1,1,4.73,0,.24.24,0,1,0,.33.33,2.4,2.4,0,1,1,0,4.74Z", transform: "translate(-313.3 -244.88)", fill: "#231f20" }),
                React.createElement("path", { d: "M405.14,370.76a1.16,1.16,0,1,1-1.16-1.15A1.16,1.16,0,0,1,405.14,370.76Z", transform: "translate(-313.3 -244.88)", fill: "#231f20" }),
                React.createElement("text", { transform: "matrix(1.06, 0, -0.34, 0.94, 105.31, 107.64)", "font-size": "24.68", fill: "#232626", "font-family": "Intrepid" }, "P"),
                React.createElement("text", { transform: "translate(111.63 106.6) scale(1.04 1)", "font-size": "11.98", fill: "#232626", "font-family": "Intrepid" }, ".io"),
                React.createElement("path", { d: "M429.93,343.73a.73.73,0,0,1-.74.72.72.72,0,1,1,0-1.43A.73.73,0,0,1,429.93,343.73Z", transform: "translate(-313.3 -244.88)", fill: "#8c6046", stroke: "#232626", "stroke-miterlimit": "10", "stroke-width": "0.15" }),
                React.createElement("path", { d: "M418.48,328.66c-.23,0-1.15,0-1.33,0s-.08-.14-.1-1.55c0-1.14.22-.28-.28-1.24a12.54,12.54,0,0,0-1.06-2,15.41,15.41,0,0,0-1.21,2.07,1.43,1.43,0,0,0-.29,1.1c0,.89,0,.54,0,1.62-2.6.09-1.31-.28-3.38.59-.14.06-1.24.61-1.24.75a5.76,5.76,0,0,0,1,.75c1.1.56.89.54,1.28.56.92.05.5-.09,2.28,0,.07,1.57,0,.85.07,1.84s-.24.21,1.55,2.69c1.39-2.65,1.32-1.22,1.26-4.64a20.38,20.38,0,0,0,2.59-.08c1-.06.21,0,2.18-1.28C419.42,328.52,420,328.68,418.48,328.66Zm-2.74,2.41a1,1,0,0,1-1-1,1,1,0,0,1,1-1,1,1,0,0,1,1,1A1,1,0,0,1,415.74,331.07Z", transform: "translate(-313.3 -244.88)", fill: "#231f20" }),
                React.createElement("path", { d: "M442.72,328.66c-.23,0-1.15,0-1.32,0s-.09-.14-.11-1.55c0-1.14.23-.28-.28-1.24a12.54,12.54,0,0,0-1.06-2,15.49,15.49,0,0,0-1.2,2.07,1.43,1.43,0,0,0-.3,1.1c0,.89,0,.54,0,1.62-2.6.09-1.31-.28-3.39.59-.14.06-1.23.61-1.23.75a5.41,5.41,0,0,0,1,.75c1.1.56.89.54,1.27.56.92.05.51-.09,2.28,0,.07,1.57,0,.85.07,1.84s-.24.21,1.55,2.69c1.4-2.65,1.33-1.22,1.26-4.64a20.59,20.59,0,0,0,2.6-.08c.95-.06.2,0,2.17-1.28C443.66,328.52,444.22,328.68,442.72,328.66ZM440,331.07a1,1,0,0,1-1-1,1,1,0,1,1,2,0A1,1,0,0,1,440,331.07Z", transform: "translate(-313.3 -244.88)", fill: "#231f20" }),
                React.createElement("path", { d: "M405.2,344.55a1,1,0,0,1-1,1,1,1,0,0,1-1-1,1,1,0,1,1,2,0Z", transform: "translate(-313.3 -244.88)", fill: "#231f20" }),
                React.createElement("path", { d: "M407.06,341.13a15.68,15.68,0,0,1-3-4.35,16.58,16.58,0,0,1-7.67,7.58,14.5,14.5,0,0,1,4.44,2.82,14.86,14.86,0,0,1,3.46,4.79,13.65,13.65,0,0,1,2.85-4.53,14.17,14.17,0,0,1,4.5-3.14A15.51,15.51,0,0,1,407.06,341.13Zm-1.57,4.53c.07,3.35.14,2-1.22,4.55-1.78-2.42-1.44-1.76-1.53-2.63s0-.28-.07-1.81c-1.74-.11-1.34,0-2.25,0-.38,0-.17,0-1.25-.56a5.27,5.27,0,0,1-1-.73c0-.14,1.08-.7,1.22-.75,2-.85.77-.49,3.33-.57,0-1.07,0-.72,0-1.61a1.4,1.4,0,0,1,.29-1.08,17.67,17.67,0,0,1,1.19-2,15.38,15.38,0,0,1,1,2c.49,1,.27.11.27,1.22,0,1.39,0,1.52.1,1.53s1.08,0,1.31,0c1.48,0,.92-.14,3.31,1.13-1.94,1.22-1.2,1.2-2.15,1.26A16.77,16.77,0,0,1,405.49,345.66Z", transform: "translate(-313.3 -244.88)", fill: "#231f20" }),
                React.createElement("path", { d: "M406.89,343.19c-.23,0-1.14,0-1.31,0s-.09-.14-.1-1.53c0-1.11.22-.26-.27-1.22a15.38,15.38,0,0,0-1-2,17.67,17.67,0,0,0-1.19,2,1.4,1.4,0,0,0-.29,1.08c0,.89,0,.54,0,1.61-2.56.08-1.29-.28-3.33.57-.14.05-1.22.61-1.22.75a5.27,5.27,0,0,0,1,.73c1.08.56.87.54,1.25.56.91,0,.51-.09,2.25,0,.07,1.53,0,.84.07,1.81s-.25.21,1.53,2.63c1.36-2.59,1.29-1.2,1.22-4.55a16.77,16.77,0,0,0,2.56-.08c.95-.06.21,0,2.15-1.26C407.81,343.05,408.37,343.21,406.89,343.19Zm-2.69,2.37a1,1,0,0,1-1-1,1,1,0,1,1,2,0A1,1,0,0,1,404.2,345.56Z", transform: "translate(-313.3 -244.88)", fill: "none" }),
                React.createElement("path", { d: "M454.29,344.79a1,1,0,1,1-2,0,1,1,0,1,1,2,0Z", transform: "translate(-313.3 -244.88)", fill: "#231f20" }),
                React.createElement("path", { d: "M456.16,341.37a15.34,15.34,0,0,1-3-4.36,16.53,16.53,0,0,1-7.67,7.59,14.75,14.75,0,0,1,7.89,7.61,13.72,13.72,0,0,1,2.86-4.53,13.89,13.89,0,0,1,4.5-3.14A15.51,15.51,0,0,1,456.16,341.37Zm-1.57,4.53c.07,3.35.14,2-1.22,4.55-1.78-2.42-1.45-1.76-1.53-2.63s0-.28-.07-1.81c-1.75-.11-1.34,0-2.25,0-.38,0-.18,0-1.26-.56a5.52,5.52,0,0,1-1-.73c0-.14,1.08-.7,1.22-.75,2-.85.77-.49,3.33-.57,0-1.07,0-.72,0-1.61a1.41,1.41,0,0,1,.3-1.08,16.33,16.33,0,0,1,1.19-2,15.38,15.38,0,0,1,1,2c.49,1,.26.1.26,1.22,0,1.39,0,1.52.11,1.53s1.08,0,1.31,0c1.48,0,.92-.14,3.31,1.13-1.94,1.22-1.21,1.2-2.15,1.26A16.77,16.77,0,0,1,454.59,345.9Z", transform: "translate(-313.3 -244.88)", fill: "#231f20" }),
                React.createElement("path", { d: "M456,343.43c-.23,0-1.14,0-1.31,0s-.09-.14-.11-1.53c0-1.12.23-.26-.26-1.22a15.38,15.38,0,0,0-1-2,16.33,16.33,0,0,0-1.19,2,1.41,1.41,0,0,0-.3,1.08c0,.89,0,.54,0,1.61-2.56.08-1.29-.28-3.33.57-.14.05-1.22.61-1.22.75a5.52,5.52,0,0,0,1,.73c1.08.56.88.54,1.26.56.91,0,.5-.09,2.25,0,.07,1.53,0,.83.07,1.81s-.25.21,1.53,2.63c1.36-2.59,1.29-1.2,1.22-4.55a16.77,16.77,0,0,0,2.56-.08c.94-.06.21,0,2.15-1.26C456.91,343.29,457.47,343.45,456,343.43Zm-2.69,2.37a1,1,0,0,1-1-1,1,1,0,1,1,2,0A1,1,0,0,1,453.3,345.8Z", transform: "translate(-313.3 -244.88)", fill: "none" })),
            React.createElement("path", { d: "M465.4,266.76q-2.5,18.5-5,37v0c-.07.38-.13.82-.18,1.29,0,0,0,.1,0,.16-.8,7.36-.71,24.94-11.33,41.26-10.48,16.1-34.1,26.7-53.52,26-19.42.73-43-9.87-53.52-26-10.62-16.32-10.53-33.9-11.33-41.26,0-.06,0-.11,0-.16,0-.47-.11-.91-.18-1.29v0q-2.5-18.48-5-37c11.49,18.21,21.82,23.4,30,23.88,13.76.81,21.15-11.68,40-11.85,18.9.17,26.28,12.66,40,11.85C443.59,290.16,453.91,285,465.4,266.76Z", transform: "translate(-313.3 -244.88)", fill: "none", stroke: "#232626", "stroke-linecap": "round", "stroke-miterlimit": "10", "stroke-width": "2" }),
            React.createElement("line", { x1: "152.1", y1: "21.88", x2: "152.1", y2: "21.87", fill: "none", stroke: "#232626", "stroke-linecap": "round", "stroke-miterlimit": "10", "stroke-width": "2" }),
            React.createElement("path", { d: "M460.38,303.75,460.2,305", transform: "translate(-313.3 -244.88)", fill: "none", stroke: "#232626", "stroke-linecap": "round", "stroke-miterlimit": "10", "stroke-width": "2" }),
            React.createElement("path", { d: "M478.12,300.15c-4.67,2-13.27,3.07-17.94,5.05", transform: "translate(-313.3 -244.88)", fill: "none", stroke: "#232626", "stroke-linecap": "round", "stroke-miterlimit": "10", "stroke-width": "2" }),
            React.createElement("path", { d: "M395.33,372.43c-.5,0-1,0-1.49-.08", transform: "translate(-313.3 -244.88)", fill: "none", stroke: "#232626", "stroke-linecap": "round", "stroke-miterlimit": "10", "stroke-width": "2" })));
    };
    MaskSignature.optionValue = 'MaskSignature';
    return MaskSignature;
}(React.Component));
exports.default = MaskSignature;
