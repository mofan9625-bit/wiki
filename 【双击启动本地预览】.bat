@echo off
chcp 65001 >nul
title 机场wiki指南 (jichangwiki.cc) - 本地预览服务
color 0b

echo ======================================================================
echo           机场wiki指南 (jichangwiki.cc) - 本地全站预览启动器
echo ======================================================================
echo.
echo [1/3] 正在检测并启动本地静态预览服务...
echo       服务地址: http://127.0.0.1:4321/
echo       网站地图: http://127.0.0.1:4321/sitemap/
echo       XML地图:  http://127.0.0.1:4321/sitemap.xml
echo.

:: 自动打开浏览器
echo [2/3] 正在调起默认浏览器打开网站首页与网站地图...
start "" "http://127.0.0.1:4321/"
timeout /t 2 >nul
start "" "http://127.0.0.1:4321/sitemap/"

echo.
echo [3/3] 预览服务器持续运行中...
echo       如需停止预览，直接关闭此窗口即可。
echo ======================================================================
echo.

npm run preview

pause
