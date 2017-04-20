	// 页面渲染模块
	// 渲染方法
	function appendHtml(datas){
		var html_ = '<tr title="'+ datas.id +'">'+
						'<td>' +
							'<input type="checkbox" class="ckbox">' +
							'<span>'+ datas.id +'</span>' +
						'</td>' +
						'<td>' +
						   '<input class="inp" type="text" value="'+ datas.classify +'" checked="disabled">' +
						'</td>' +
						'<td>' +
							'<input class="inp" type="text" value="'+ datas.headline +'" checked="disabled">' +
						'</td>' +
						'<td>' +
							'<input class="inp" type="text" value="'+ datas.class +'" checked="disabled">' +
						'</td>' +
						'<td>' +
							'<input class="inp" type="text" value="'+ datas.state +'" checked="disabled">' +
						'</td>' +
						'<td>' +
							'<input class="inp" type="text" value="'+ datas.time +'" checked="disabled">' +
						'</td>' +
						'<td>' +
							'<input class="inp" type="text" value="'+ datas.person +'" checked="disabled">' +
						'</td>' +
						'<td>' +
							'<input class="inp" type="text" value="'+ datas.area +'" checked="disabled">' +
						'</td>' +
						'<td>' +
							'<input type="button" value="删除" class="del" title="'+ datas.id +'">' +
						'</td>' +
					'</tr>';
		return html_;
	}	
	// 选择性渲染
	function selFun(datas, fun, name){
		if(datas.length == 1){
			$(name).append(fun(datas[0]));  // 添加一条记录
		} else {
			$(name).html('');
			$.each(datas, function(key, val){
				$(name).append(fun(val));
			})
		}
	}
	// 录入为空判断模块
    function empInput(names, error){
		var status = 0;
	
		$.each(names, function(key, val){
			if($(val).val() == ''){
				status += 1;
			} else {
				status += 0;
			}
		})
		if(status > 0){
			$(error).show();
			return false;
		}
		else {
			$(error).hide();
			var data = {
				classify: $(names.classify).val(),
				headline: $(names.headline).val(),
				class: $(names.class).val(),
				state: $(names.state).val(),
				time:$(names.time).val(),
				person:$(names.person).val(),
				area:$(names.area).val()
			}		
			return data;				
		}
		status = 0; 
	}		
	// 清空输入框
	function empInp(names){
		$.each(names, function(key, val){
			$(val).val("");
		})		
	}	
	// 获取ID
	function getId(datas){
		var id = -1;
		$.each(datas, function(key, val){
			if(id < val.id){
				id = val.id;
			}
		})
		return id;
	}








	
