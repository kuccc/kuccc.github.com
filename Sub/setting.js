﻿var graph = new Springy.Graph();
var A243083Z = graph.newNode({label: '자매(9명)', color: '#FF00FF'});
var A439780Z = graph.newNode({label: '추예은(주혜)', color: '#000000'});
var A444812Z = graph.newNode({label: '전은주(주혜)', color: '#000000'});
var A501029Z = graph.newNode({label: '김예인(민선)', color: '#000000'});
var A455618Z = graph.newNode({label: '선한빛(주영)', color: '#000000'});
var A409640Z = graph.newNode({label: '홍희정(은진)', color: '#000000'});
var A490949Z = graph.newNode({label: '김해련(은진)', color: '#000000'});
var A474428Z = graph.newNode({label: '김희연(혜준)', color: '#000000'});
var A499028Z = graph.newNode({label: '김예슬(서현)', color: '#000000'});
var A478868Z = graph.newNode({label: '박서우(소현)', color: '#000000'});
var A313457Z = graph.newNode({label: '형제(10명)', color: '#1E90FF'});
var A491783Z = graph.newNode({label: '김온유(지훈)', color: '#000000'});
var A467195Z = graph.newNode({label: '양동탁(준현)', color: '#000000'});
var A458957Z = graph.newNode({label: '장성욱(재우)', color: '#000000'});
var A503183Z = graph.newNode({label: '김상윤(재우)', color: '#000000'});
var A471222Z = graph.newNode({label: '유경환(재우)', color: '#000000'});
var A520944Z = graph.newNode({label: '김선교(상혁)', color: '#000000'});
var A444185Z = graph.newNode({label: '양준혁(상혁)', color: '#000000'});
var A452282Z = graph.newNode({label: '정영복(해천)', color: '#000000'});
var A453052Z = graph.newNode({label: '마현준(해천)', color: '#000000'});
var A477506Z = graph.newNode({label: '배준엽(성근)', color: '#000000'});
var A111111Z = graph.newNode({label: '이민석(민철)', color: '#000000'});
var A222222Z = graph.newNode({label: '상덕', color: '#1E90FF'});
var A77792Z = graph.newNode({label: '중순장', color: '#8B0000'});
var A40622Z = graph.newNode({label: '상혁', color: '#1E90FF'});
var A39781Z = graph.newNode({label: '채영', color: '#1E90FF'});
var A42533Z = graph.newNode({label: '민철', color: '#1E90FF'});
var A40224Z = graph.newNode({label: '소현', color: '#FF00FF'});
var A48860Z = graph.newNode({label: '도경', color: '#FF00FF'});
var A203829Z = graph.newNode({label: '9월 5일(월) 6:30', color: '#8B0000'});
var A164865Z = graph.newNode({label: '카니발 피자?뚝닭?', color: '#8B0000'});
graph.newEdge(A243083Z, A439780Z, {color: '#00A0B0'});
graph.newEdge(A243083Z, A444812Z, {color: '#00A0B0'});
graph.newEdge(A243083Z, A501029Z, {color: '#00A0B0'});
graph.newEdge(A243083Z, A455618Z, {color: '#00A0B0'});
graph.newEdge(A243083Z, A409640Z, {color: '#00A0B0'});
graph.newEdge(A243083Z, A490949Z, {color: '#00A0B0'});
graph.newEdge(A243083Z, A474428Z, {color: '#00A0B0'});
graph.newEdge(A243083Z, A499028Z, {color: '#00A0B0'});
graph.newEdge(A243083Z, A478868Z, {color: '#00A0B0'});
graph.newEdge(A313457Z, A491783Z, {color: '#00A0B0'});
graph.newEdge(A313457Z, A467195Z, {color: '#00A0B0'});
graph.newEdge(A313457Z, A458957Z, {color: '#00A0B0'});
graph.newEdge(A313457Z, A503183Z, {color: '#00A0B0'});
graph.newEdge(A313457Z, A471222Z, {color: '#00A0B0'});
graph.newEdge(A313457Z, A520944Z, {color: '#00A0B0'});
graph.newEdge(A313457Z, A444185Z, {color: '#00A0B0'});
graph.newEdge(A313457Z, A452282Z, {color: '#00A0B0'});
graph.newEdge(A313457Z, A453052Z, {color: '#00A0B0'});
graph.newEdge(A313457Z, A477506Z, {color: '#00A0B0'});
graph.newEdge(A313457Z, A111111Z, {color: '#00A0B0'});
graph.newEdge(A77792Z, A222222Z, {color: '#00A0B0'});
graph.newEdge(A77792Z, A40622Z, {color: '#00A0B0'});
graph.newEdge(A77792Z, A39781Z, {color: '#00A0B0'});
graph.newEdge(A77792Z, A42533Z, {color: '#00A0B0'});
graph.newEdge(A77792Z, A40224Z, {color: '#00A0B0'});
graph.newEdge(A77792Z, A48860Z, {color: '#00A0B0'});
graph.newEdge(A203829Z, A164865Z, {color: '#00A0B0'});
jQuery(function(){var springy = window.springy = jQuery('#springydemo').springy({graph: graph,nodeSelected: function(node){console.log('Node selected: ' + JSON.stringify(node.data));}});});
