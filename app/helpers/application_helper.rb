module ApplicationHelper

  def set_title(page_title = '')
    base_title = ''
    if page_title.empty?
      'AmazonCopy | 本, ファッション, 家電から食品まで | アマゾン'
    else
      page_title
    end
  end

end
