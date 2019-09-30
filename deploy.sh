echo 'start deploy=====>'
docker pull registry.gitlab.com/gkc_team/website-edunetwork-frontend:latest
./run-edunetwork-dev.sh
echo '=====>deploy success'