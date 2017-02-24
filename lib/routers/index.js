//首页
FlowRouter.route('/', {
    action: function(params, queryParams) {
        FlowLayout.render("index");
    }
});
//地点
FlowRouter.route('/index_place', {
    action: function(params, queryParams) {
        FlowLayout.render("index_place");
    }
});
//酒店
FlowRouter.route('/hotel', {
    action: function(params, queryParams) {
        FlowLayout.render("hotel");
    }
});
//发起活动
FlowRouter.route('/launch_activity', {
    action: function(params, queryParams) {
        FlowLayout.render("launch_activity");
    }
});
//发起主题
FlowRouter.route('/launch_theme', {
    action: function(params, queryParams) {
        FlowLayout.render("launch_theme");
    }
});
//活动展开页
FlowRouter.route('/activity', {
    action: function(params, queryParams) {
        FlowLayout.render("activity");
    }
});
//主题展开页
FlowRouter.route('/theme', {
    action: function(params, queryParams) {
        FlowLayout.render("theme");
    }
});
//客房
FlowRouter.route('/room', {
    action: function(params, queryParams) {
        FlowLayout.render("room");
    }
});
//全景
FlowRouter.route('/panorama', {
    action: function(params, queryParams) {
        FlowLayout.render("panorama");
    }
});
//全部评价
FlowRouter.route('/whole_center', {
    action: function(params, queryParams) {
        FlowLayout.render("whole_center");
    }
});
//我的订单
FlowRouter.route('/my_order', {
    action: function(params, queryParams) {
        FlowLayout.render("my_order");
    }
});
//我的活动
FlowRouter.route('/my_activity', {
    action: function(params, queryParams) {
        FlowLayout.render("my_activity");
    }
});
//我的钱包
FlowRouter.route('/my_wallet', {
    action: function(params, queryParams) {
        FlowLayout.render("my_wallet");
    }
});
//我的代金券
FlowRouter.route('/my_vouchers', {
    action: function(params, queryParams) {
        FlowLayout.render("my_vouchers");
    }
});
//订单评价
FlowRouter.route('/comment_order', {
    action: function(params, queryParams) {
        FlowLayout.render("comment_order");
    }
});
//个人中心
FlowRouter.route('/personal', {
    action: function(params, queryParams) {
        FlowLayout.render("personal");
    }
});
//修改资料
FlowRouter.route('/modify', {
    action: function(params, queryParams) {
        FlowLayout.render("modify");
    }
});