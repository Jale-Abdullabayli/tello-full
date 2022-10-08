class GlobalFilter {
    constructor(query, queryString) {
      this.query = query;
      this.queryString = queryString;
    }
  
    filter() {
      const tempQueryString = { ...this.queryString };
      const insufficient = ["page", "sort", "fields", "limit"];
      insufficient.forEach((q) => delete tempQueryString[q]);
      const tempQuery = JSON.stringify(tempQueryString);
      const newQueryStr = tempQuery.replace(
        /\b(gte|gt|lte|lt|eq|ne)\b/g,
        (str) => `$${str}`
      );
      this.query = this.query.find(JSON.parse(newQueryStr));
  
      
      return this;
    }

    paginate() {
      const page = parseInt(this.queryString.page) || 1;
      const limit = parseInt(this.queryString.limit) || 6;
      const skip = (page - 1) * limit;
      this.query.skip(skip).limit(limit);
  
      return this;
    }

    
    sort() {
      if (this.queryString.sort) {
        const mySort = this.queryString.sort.split(",").join(" ");
        this.query.sort(mySort);
      } else {
        this.query.sort("createdAt");
      }
  
      return this;
    }
    
  }
  
  module.exports = GlobalFilter;