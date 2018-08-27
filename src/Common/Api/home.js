import $http from './fetch/index'

export const fetchHomeData = (params)=>{
    return $http.GET('/5a535c5390626970a9649c4c/crm/v1/consume-reports', params);
}