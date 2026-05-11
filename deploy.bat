@echo off
chcp 65001 > nul
cls

echo ================================================
echo   Seaside Beer — デプロイスクリプト
echo ================================================
echo.

REM ── データファイルの確認 ──────────────────────────
echo [確認] お知らせ・ブログを更新した場合は、
echo        管理画面から「JSファイルをダウンロード」して
echo        news.js / posts.js を data\ フォルダに
echo        上書きしてから続けてください。
echo.
set /p CONT="このまま続けますか？ (Y/n): "
if /i "%CONT%"=="n" (
  echo キャンセルしました。
  pause
  exit /b 0
)

echo.
echo [1/2] dist\ に最新ファイルをコピー中...

REM HTMLファイル
copy /y "index.html"   "dist\index.html"   > nul
copy /y "post.html"    "dist\post.html"    > nul
copy /y "privacy.html" "dist\privacy.html" > nul

REM データファイル
copy /y "data\news.js"  "dist\data\news.js"  > nul
copy /y "data\posts.js" "dist\data\posts.js" > nul

REM アセット（変更があれば上書き）
xcopy /y /q "assets\*" "dist\assets\" > nul

echo   → コピー完了
echo.
echo [2/2] Netlify にデプロイ中...
echo.

:RETRY
netlify deploy --prod --dir=dist --site=1d52d1ee-c267-42af-b99d-b92afe365b90
if %ERRORLEVEL% neq 0 (
  echo.
  echo   Netlify が一時的に応答しませんでした。5秒後に再試行します...
  timeout /t 5 > nul
  goto RETRY
)

echo.
echo ================================================
echo   デプロイ完了！
echo   https://seasidebeer.netlify.app
echo ================================================
echo.
pause
