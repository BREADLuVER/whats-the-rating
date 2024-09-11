# what-s-the-rating

forum where you predict ratings of future most anticipated games

```
guess-the-rating
├─ .git
│  ├─ config
│  ├─ description
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  ├─ sendemail-validate.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  └─ main
│  │     └─ remotes
│  │        └─ origin
│  │           └─ HEAD
│  ├─ objects
│  │  ├─ info
│  │  └─ pack
│  │     ├─ pack-c9c4e3f3d4700272b49d26546c61bc398f88968e.idx
│  │     ├─ pack-c9c4e3f3d4700272b49d26546c61bc398f88968e.pack
│  │     └─ pack-c9c4e3f3d4700272b49d26546c61bc398f88968e.rev
│  ├─ packed-refs
│  └─ refs
│     ├─ heads
│     │  └─ main
│     ├─ remotes
│     │  └─ origin
│     │     └─ HEAD
│     └─ tags
├─ .gitignore
├─ backend
│  ├─ Dockerfile
│  ├─ game_prediction
│  │  ├─ admin.py
│  │  ├─ models.py
│  │  ├─ serializers.py
│  │  ├─ tests.py
│  │  ├─ urls.py
│  │  ├─ views.py
│  │  └─ __init__.py
│  ├─ guess_the_rating
│  │  ├─ guess_the_rating
│  │  │  ├─ asgi.py
│  │  │  ├─ settings.py
│  │  │  ├─ urls.py
│  │  │  ├─ wsgi.py
│  │  │  └─ __init__.py
│  │  └─ manage.py
│  ├─ manage.py
│  └─ requirements.txt
├─ docker-compose.yml
├─ docs
│  └─ scripts.md
├─ frontend
│  ├─ Dockerfile
│  ├─ package.json
│  ├─ public
│  │  └─ index.html
│  └─ src
│     └─ app.js
├─ LICENSE
├─ postgres
│  ├─ Dockerfile
│  └─ init.sql
└─ README.md

```