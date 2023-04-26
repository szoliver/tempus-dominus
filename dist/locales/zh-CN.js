/*!
  * Tempus Dominus v6.7.7 (https://getdatepicker.com/)
  * Copyright 2013-2023 Jonathan Peterson
  * Licensed under MIT (https://github.com/Eonasdan/tempus-dominus/blob/master/LICENSE)
  */
(function(g,f){typeof exports==='object'&&typeof module!=='undefined'?f(exports):typeof define==='function'&&define.amd?define(['exports'],f):(g=typeof globalThis!=='undefined'?globalThis:g||self,f((g.tempusDominus=g.tempusDominus||{},g.tempusDominus.locales=g.tempusDominus.locales||{},g.tempusDominus.locales.zh_CN={})));})(this,(function(exports){'use strict';const name = 'zh-CN';
const localization = {
    today: "今天",
    clear: '清除选择',
    close: '关闭',
    selectMonth: '选择月份',
    previousMonth: '上个月',
    nextMonth: '下个月',
    selectYear: "选择年份",
    previousYear: '上一年',
    nextYear: '下一年',
    selectDecade: '选择年代',
    previousDecade: '上一年代',
    nextDecade: '下一年代',
    previousCentury: '上个世纪',
    nextCentury: '下个世纪',
    pickHour: "选择小时",
    incrementHour: "增加小时",
    decrementHour: "减少小时",
    pickMinute: '选择分钟',
    incrementMinute: '增加分钟',
    decrementMinute: '减少分钟',
    pickSecond: '选择秒',
    incrementSecond: '增加秒数',
    decrementSecond: '减少秒数',
    toggleMeridiem: '切换AM-PM',
    selectTime: "选择时间",
    selectDate: '选择日期',
    dayViewHeaderFormat: { month: 'long', year: '2-digit' },
    locale: 'zh-CN',
    startOfTheWeek: 1,
    dateFormats: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'dd/MM/yyyy',
        LL: 'd MMMM yyyy',
        LLL: 'd MMMM yyyy HH:mm',
        LLLL: 'dddd d MMMM yyyy HH:mm',
    },
    ordinal: (n) => {
        const o = n === 1 ? 'er' : '';
        return `${n}${o}`;
    },
    format: 'L LT',
};exports.localization=localization;exports.name=name;Object.defineProperty(exports,'__esModule',{value:true});}));
